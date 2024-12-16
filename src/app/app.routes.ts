import { Routes } from '@angular/router';
import { dynamicRoutes } from './dynamic-routes';


const staticRoutes: Routes = [

];

const fallbackRoute: Routes = [{ path: "**", redirectTo: "home" }];

export const routes: Routes = [
  ...staticRoutes,
  ...dynamicRoutes,
  ...fallbackRoute
];
