import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { SignOutComponent } from "./components/sign-out/sign-out.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { UserComponent } from "./components/user/user.component";
import { UsersComponent } from "./components/users/users.component";
import { VideoComponent } from "./components/video/video.component";
import { VideosComponent } from "./components/videos/videos.component";
import { AuthorizationService } from "./services/authorization.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    SignInComponent,
    SignOutComponent,
    SignUpComponent,
    UserComponent,
    UsersComponent,
    VideoComponent,
    VideosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
