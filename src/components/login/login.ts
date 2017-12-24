import { Component } from "@angular/core";
import { NavController } from "ionic-angular/navigation/nav-controller";
import { HomePage } from "../../pages/home/home";
import { MenuController } from "ionic-angular/components/app/menu-controller";

@Component({
  selector: "login",
  templateUrl: "login.html"
})
export class LoginComponent {
  text: string;

  constructor(
    private navCtrl: NavController,
    private menuCtrl: MenuController
  ) {
    console.log("Hello LoginComponent Component ", navCtrl);
    this.text = "Login component";
    this.menuCtrl.swipeEnable(false);
  }

  ionViewCanEnter() {
    console.log("Ion View Can enter");
    this.text = "Ion View Can Enter";
  }

  authenticate() {
    console.log("Authenticating ....");
    this.navCtrl.setRoot(HomePage);
    // this.navCtrl.push(HomePage);
  }
}
