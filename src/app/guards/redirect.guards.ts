/******************************************************************************
 * @Author                : 0K00<qdouvillez@gmail.com>                        *
 * @CreatedDate           : 2024-12-28 09:12:25                               *
 * @LastEditors           : 0K00<qdouvillez@gmail.com>                        *
 * @LastEditDate          : 2024-12-28 09:17:32                               *
 *****************************************************************************/

import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RedirectGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      window.open(route.data['externalUrl'], "_blank");
      return true;

  }
}
