import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.css"],
})
export class VideoComponent {
  id: number;

  constructor(private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params["id"];
  }
}
