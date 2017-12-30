import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { AlertController } from "ionic-angular/components/alert/alert-controller";
import { LoginComponent } from "../../components/login/login";
import { SMS } from "@ionic-native/sms";
import { Storage } from "@ionic/storage";
import { Firebase } from "@ionic-native/firebase";

@IonicPage()
@Component({
  selector: "page-signup",
  templateUrl: "signup.html"
})
export class SignupPage {
  public mobileNo: string;
  private otp: string = "123456";
  countryCode: string = "+91";
  // private verificationId: string = "";
  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private sms: SMS,
    private storage: Storage,
    private firebase: Firebase
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SignupPage");
  }

  sendOtp() {
    console.log("mobile No : " + this.mobileNo);
    if (this.validatedNumber(this.mobileNo)) {
      this.sms
        .send(
          this.mobileNo,
          `Message From TrackMe: \n Your otp is \n ${this.otp}.`,
          {
            replaceLineBreaks: true
          }
        )
        .then(() => {
          console.log("Message sent successfully.");
          this.storage.set(this.mobileNo, this.otp);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  sendMessage() {
    if (this.validatedNumber(this.mobileNo)) {
      let noWithCourntryCode = this.countryCode + this.mobileNo;
      this.firebase
        .verifyPhoneNumber(noWithCourntryCode, 15)
        .then(credential => {
          console.log(credential);
          this.navCtrl.setRoot(LoginComponent, {
            mobileNo: this.countryCode + this.mobileNo,
            verificationId: credential.verificationId
          });
        })
        .catch(err => {
          let alert = this.alertCtrl.create({
            title: "Error Occured",
            subTitle:
              "Something went wrong while sending OTP.Please try after sometime." +
              err,
            buttons: ["OK"]
          });
          alert.present();
        });
    }
  }

  validatedNumber(mobileNo: string) {
    if (mobileNo === undefined || mobileNo.length < 10) {
      let alert = this.alertCtrl.create({
        title: "Error Occured",
        subTitle: "Please enter a valid number.",
        buttons: ["OK"]
      });
      alert.present();
      return false;
    }
    return true;
  }

  // navigateToLogin() {
  //   this.navCtrl.setRoot(LoginComponent, {
  //     mobileNo: this.mobileNo,
  //     verificationId: this.verificationId
  //   });
  // }
}
