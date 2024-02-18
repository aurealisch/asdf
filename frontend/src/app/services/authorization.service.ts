import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthorizationService {
  authorize(options: { username: string; password: string }) {
    localStorage.setItem("username", options.username);
    localStorage.setItem("password", options.password);
  }

  unauthorize() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  getIsAuthorizated() {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    return username !== null && password !== null;
  }
}
