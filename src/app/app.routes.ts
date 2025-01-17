import { Routes } from '@angular/router';
import { routes as dynamicRoutes } from './routes.routes';

const staticRoutes: Routes = [

];

const fallbackRoute: Routes = [{ path: "**", redirectTo: "" }];

export const routes: Routes = [
  ...dynamicRoutes,
  ...staticRoutes,
  ...fallbackRoute
];
