import { Routes } from '@angular/router';
import { routes as dynamicRoutes } from './routes.routes';

const staticRoutes: Routes = [

];

const fallbackRoute: Routes = [{ path: "**", redirectTo: "home" }];

export const routes: Routes = [
  ...dynamicRoutes,
  ...staticRoutes,
  ...fallbackRoute
];
