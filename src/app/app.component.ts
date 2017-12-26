import { Component, ViewChild } from "@angular/core";
import { Platform, Nav, Menu } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";
import { LoginComponent } from "../components/login/login";
import { MenuController } from "ionic-angular/components/app/menu-controller";
import { NavController } from "ionic-angular/navigation/nav-controller";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any = LoginComponent;
  @ViewChild(Nav) navCtrl: NavController;
  @ViewChild(Menu) menuCtrl: MenuController;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  navigateTo(page: string) {
    this.navCtrl.push(page);
    this.menuCtrl.close();
  }

  signOut() {
    console.log("inside sign out");
    this.navCtrl.setRoot(LoginComponent);
    this.menuCtrl.close();
  }
}
