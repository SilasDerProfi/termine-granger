import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-input",
  templateUrl: "./input.page.html",
  styleUrls: ["./input.page.scss"]
})
export class InputPage implements OnInit {
  tId: number;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.tId = +this.activatedRoute.snapshot.paramMap.get("taskId");
  }
}
