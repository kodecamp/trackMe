import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the ShareLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-share-location",
  templateUrl: "share-location.html"
})
export class ShareLocationPage {
  isHidden: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ShareLocationPage");
  }

  select(id: string, item: any) {
    console.log(item);
    if (item.color === "") {
      item.setAttribute("color", "primary");
      console.log("if condition");
    } else {
      item.color = "";
      console.log("else condition");
    }
  }

  toggleSearchBar() {
    console.log(this.isHidden);
    this.isHidden = !this.isHidden;
  }
}
