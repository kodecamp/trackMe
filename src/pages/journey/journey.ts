import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-journey",
  templateUrl: "journey.html"
})
export class JourneyPage {
  isDisabled: boolean = true;
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad JourneyPage");
  }

  shareLocation() {
    this.navCtrl.push("ShareLocationPage");
  }

  changeLocation() {
    this.isDisabled = !this.isDisabled;
  }
}
