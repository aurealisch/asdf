import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent {
  id: number;

  constructor(private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params["id"];
  }
}
