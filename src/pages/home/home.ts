import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { MenuController } from "ionic-angular/components/app/menu-controller";
import { UserSettingsPage } from "../user-settings/user-settings";
import { IonicApp } from "ionic-angular/components/app/app-root";
import { IonicPage } from "ionic-angular/navigation/ionic-page";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
    menuCtrl.swipeEnable(true);
  }

  showMenu() {
    this.menuCtrl.toggle();
  }

  showSettings() {
    this.navCtrl.push(UserSettingsPage);
  }
}
