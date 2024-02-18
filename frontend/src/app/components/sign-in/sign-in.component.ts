import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthorizationService } from "../../services/authorization.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"],
})
export class SignInComponent {
  formGroup: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authorizationService: AuthorizationService
  ) {
    this.formGroup = this.formBuilder.group({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  ngSubmit() {
    const username = this.formGroup.value.username;
    const password = this.formGroup.value.password;

    this.authorizationService.authorize({
      username,
      password,
    });
    this.router.navigate(["/"]);
  }
}
