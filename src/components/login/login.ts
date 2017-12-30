import { Component } from "@angular/core";
import { NavController } from "ionic-angular/navigation/nav-controller";
import { HomePage } from "../../pages/home/home";
import { MenuController } from "ionic-angular/components/app/menu-controller";
import { NavParams } from "ionic-angular/navigation/nav-params";
import { Storage } from "@ionic/storage";
import { AlertController } from "ionic-angular/components/alert/alert-controller";
// import { Firebase } from "@ionic-native/firebase";
import * as firebase from "firebase";

@Component({
  selector: "login",
  templateUrl: "login.html"
})
export class LoginComponent {
  text: string;
  mobileNo: string = "";
  otp: string = "";

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private menuCtrl: MenuController,
    private storage: Storage,
    private alertCtrl: AlertController
  ) {
    console.log("Hello LoginComponent Component ", navCtrl);
    this.text = "Login component";
    this.menuCtrl.swipeEnable(false);
  }

  ionViewCanEnter() {
    console.log("Ion View Can enter");
    console.log(this.navParams);
    this.mobileNo = this.navParams.get("mobileNo");
    console.log("mobileNo");
  }

  authenticate() {
    console.log("Authenticating ....");
    // const mobileNo = this.navParams.get("mobileNo");
    const verificationId = this.navParams.get("verificationId");
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      this.otp
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then(
        info => {
          console.log("login successfull");
          console.log(info);
          this.storage.set("LoginVerified", true);
          this.navCtrl.setRoot(HomePage);
        },
        error => {
          console.log("error occured...");
          let alert = this.alertCtrl.create({
            title: "Error Occured",
            subTitle:
              "Unable to login. Try again with valid credentials." + error,
            buttons: ["OK"]
          });
          alert.present();
          this.storage.set("LoginVerified", false);
        }
      );
    // this.storage.get(this.mobileNo).then(value => {
    //   if (value === this.otp) {
    //     this.storage.set("LoginVerified", true);
    //     this.navCtrl.setRoot(HomePage);
    //   } else {
    //     let alert = this.alertCtrl.create({
    //       title: "Error Occured",
    //       subTitle:
    //         "Please enter a valid number." +
    //         this.mobileNo +
    //         " otp from db : " +
    //         value,
    //       buttons: ["OK"]
    //     });
    //     alert.present();
    //     this.storage.set("LoginVerified", false);
    //   }
    // });

    // this.navCtrl.push(HomePage);
  }

  validateUser() {
    // firebase.auth.PhoneAuthProvider.credential();
  }

  navigateToSignUp() {
    this.navCtrl.push("SignupPage");
  }
}
