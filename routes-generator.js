const fs = require('fs');
const path = require('path');

const PAGES_DIR = './src/app/pages';
const OUTPUT_FILE = './src/app/routes.routes.ts';

function findPageFiles(dir) {
  let pageFiles = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      pageFiles = pageFiles.concat(findPageFiles(fullPath));
    } else if (file.endsWith('.page.ts')) {
      pageFiles.push(fullPath);
    }
  }

  return pageFiles;
}

function extractPageData(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');

  const pageInfoMatch = content.match(/const\s+pageInfo\s*=\s*{\s*title:\s*['"](.+?)['"]\s*,\s*order:\s*(\d+)\s*(?:,\s*alpha:\s*(true|false))?\s*(?:,\s*soon:\s*(true|false))?\s*}/);

  const pageTitle = pageInfoMatch ? pageInfoMatch[1] : null;
  const order = pageInfoMatch ? parseInt(pageInfoMatch[2], 10) : 999;
  const alpha = pageInfoMatch ? pageInfoMatch[3] : false;
  const soon = pageInfoMatch ? pageInfoMatch[4] : false;

  const classMatch = content.match(/export\s+(default\s+class|class)\s+(\w+)\s*{/);
  const className = classMatch ? classMatch[2] : null;

  return { pageTitle, order, className, alpha, soon };
}

function groupByParentDirectory(routes) {
  const groupedRoutes = {};

  for (const route of routes) {
    const parentDir = route.path.split('/')[0];

    if (!groupedRoutes[parentDir]) {
      groupedRoutes[parentDir] = [];
    }
    groupedRoutes[parentDir].push(route);
  }

  return groupedRoutes;
}

function generateRoutes() {
  const pageFiles = findPageFiles(PAGES_DIR);

  const routes = [];

  for (const filePath of pageFiles) {
    const relativePath = path.relative(PAGES_DIR, filePath);
    const importPath = relativePath.replace(/\\/g, '/').replace('.ts', '');

    const { pageTitle, order, className, alpha, soon } = extractPageData(filePath);

    if (!pageTitle || !className) {
      console.warn(`⚠️  Missing data in ${filePath}`);
      continue;
    }

    const routePath = path.dirname(importPath).replace(/\\/g, '/');
    const fileName = path.basename(importPath, '.page');

    routes.push({
      path: routePath,
      fileName: fileName,
      component: className,
      title: pageTitle,
      order: order,
      alpha: alpha,
      soon: soon,
      importPath: importPath,
    });
  }

  routes.sort((a, b) => a.order - b.order);

  const groupedRoutes = groupByParentDirectory(routes);

  const imports = [];
  const routeDefinitions = [];

  for (const parent in groupedRoutes) {
    const children = groupedRoutes[parent];

    children.forEach(route => {
      imports.push(`import ${route.component} from './pages/${route.importPath}';`);
    });

    const childrenRoutes = children
      .map(route => `{ path: '${route.fileName}', component: ${route.component}, data: { title: '${route.title}', order: ${route.order}, soon: ${route.soon}, alpha: ${route.alpha} } }`)
      .join(',\n      ');

    routeDefinitions.push(`
  { path: '${parent}', component: ComponentsPage, children: [
      { path: '', redirectTo: '${children[0].fileName}', pathMatch: 'full' },
      ${childrenRoutes}
    ]
  }`);
  }

  const routesContent = `
import { Routes } from '@angular/router';
import { ComponentsPage } from './pages/components/components.page';
${imports.join('\n')}

export const routes: Routes = [
${routeDefinitions.join(',\n')}
];
`;

  fs.writeFileSync(OUTPUT_FILE, routesContent.trim() + '\n');
  console.log(`✅ The file ${OUTPUT_FILE} was generated successfully.`);
}

generateRoutes();
