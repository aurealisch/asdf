import { Component } from "@angular/core";
import { AuthorizationService } from "../../services/authorization.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  isAuthorizated: boolean;

  constructor(private authorizationService: AuthorizationService) {
    this.isAuthorizated = this.authorizationService.getIsAuthorizated();
  }
}
