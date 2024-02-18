import { inject } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { RouterStateSnapshot } from "@angular/router";
import { AuthorizationService } from "../services/authorization.service";

export function authorizationGuard(
  activatedRouteSnapshot: ActivatedRouteSnapshot,
  routerStateSnapshot: RouterStateSnapshot
) {
  const authorizationService = inject(AuthorizationService);

  return authorizationService.getIsAuthorizated();
}
