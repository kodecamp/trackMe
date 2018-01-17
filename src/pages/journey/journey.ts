import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { GroupContactProvider } from "../../providers/group-contact/group-contact";

@IonicPage()
@Component({
  selector: "page-journey",
  templateUrl: "journey.html"
})
export class JourneyPage {
  isDisabled: boolean = true;
  from: string;
  to: string;
  constructor(
    public navCtrl: NavController,
    private gcProvider: GroupContactProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad JourneyPage");
  }

  shareLocation() {
    this.navCtrl.push("ShareLocationPage", {
      from: this.from,
      this: this.to
    });
  }

  changeLocation() {
    this.isDisabled = !this.isDisabled;
  }
}
