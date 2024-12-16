import { Routes } from '@angular/router';

const pages = require.context("./pages", false, /\.page\.ts$/);

export const dynamicRoutes: Routes = pages.keys().map((filePath) => {
  const segments = filePath
    .replace("./", "")
    .replace(".page.ts", "")
    .split("/");

  const routePath = segments.filter((segment) => !segment.startsWith("(")).join("/")

  return {
    path: routePath,
    loadChildren: () => import(`./pages/${segments.join("/")}.page.ts`).then((module) => module.default)
  };
});
