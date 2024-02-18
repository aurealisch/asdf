import { NgModule } from "@angular/core";
import { RouterModule, type Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { SignOutComponent } from "./components/sign-out/sign-out.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { UserComponent } from "./components/user/user.component";
import { UsersComponent } from "./components/users/users.component";
import { VideoComponent } from "./components/video/video.component";
import { VideosComponent } from "./components/videos/videos.component";
import { authorizationGuard } from "./guards/authorization.guard";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [authorizationGuard],
  },
  { path: "signin", component: SignInComponent },
  {
    path: "signout",
    component: SignOutComponent,
    canActivate: [authorizationGuard],
  },
  { path: "signup", component: SignUpComponent },
  { path: "user/:id", component: UserComponent },
  { path: "users", component: UsersComponent },
  { path: "video/:id", component: VideoComponent },
  { path: "videos", component: VideosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
