import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthorizationService } from "../../services/authorization.service";

@Component({
  selector: "app-sign-out",
  templateUrl: "./sign-out.component.html",
  styleUrls: ["./sign-out.component.css"],
})
export class SignOutComponent {
  constructor(
    private router: Router,
    private authorizationService: AuthorizationService
  ) {}

  click() {
    this.authorizationService.unauthorize();
    this.router.navigate(["/"]);
  }
}
