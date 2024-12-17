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

  const pageInfoMatch = content.match(/const\s+pageInfo\s*=\s*{\s*title:\s*['"](.+?)['"]\s*,\s*order:\s*(\d+)\s*}/);

  const pageTitle = pageInfoMatch ? pageInfoMatch[1] : null;
  const order = pageInfoMatch ? parseInt(pageInfoMatch[2], 10) : 999;

  const classMatch = content.match(/export\s+default\s+class\s+(\w+)\s*{/);
  const className = classMatch ? classMatch[1] : null;

  return { pageTitle, order, className };
}

function generateRoutes() {
  const pageFiles = findPageFiles(PAGES_DIR);

  const routes = [];

  for (const filePath of pageFiles) {
    const relativePath = path.relative(PAGES_DIR, filePath);
    const importPath = relativePath.replace(/\\/g, '/').replace('.ts', '');

    const { pageTitle, order, className } = extractPageData(filePath);

    if (!pageTitle || !className) {
      console.warn(`⚠️  Missing data in ${filePath}`);
      continue;
    }

    const routePath = path.dirname(importPath).replace(/\\/g, '/');

    routes.push({
      path: routePath,
      component: className,
      title: pageTitle,
      order: order,
      importPath: importPath,
    });
  }

  routes.sort((a, b) => a.order - b.order);

  const routesContent = `
    import { Routes } from '@angular/router';
    ${routes.map(route => `import ${route.component} from './pages/${route.importPath}';`).join('\n')}

    export const routes: Routes = [
    ${routes.map(route => `  { path: '${route.path}', component: ${route.component}, data: { title: '${route.title}', order: ${route.order} } }`).join(',\n')}
    ];
    `;

  fs.writeFileSync(OUTPUT_FILE, routesContent.trim());
  console.log(`✅ The file ${OUTPUT_FILE} was generated successfully.`);
}

generateRoutes();
