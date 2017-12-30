import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { MyApp } from "./app.component";
import { LoginComponent } from "../components/login/login";
import { UserSettingsPageModule } from "../pages/user-settings/user-settings.module";
import { DirectivesModule } from "../directives/directives.module";
import { ProfileComponent } from "../components/profile/profile";
import { HomePageModule } from "../pages/home/home.module";
import { JourneyPageModule } from "../pages/journey/journey.module";
import { ContactMgmtPageModule } from "../pages/contact-mgmt/contact-mgmt.module";
import { MessageHistoryPageModule } from "../pages/message-history/message-history.module";
import { JourneyStatusPageModule } from "../pages/journey-status/journey-status.module";
import { ShareLocationPageModule } from "../pages/share-location/share-location.module";
import { SignupPageModule } from "../pages/signup/signup.module";
import { GroupContactProvider } from "../providers/group-contact/group-contact";
import { ContactsProvider } from "../providers/contacts/contacts";
import { SMS } from "@ionic-native/sms";
import { IonicStorageModule } from "@ionic/storage";
import { Firebase } from "@ionic-native/firebase";
import * as firebase from "firebase";
firebase.initializeApp({
  apiKey: "AIzaSyCfewk1TkNdoCkbcYiD_eXlnh5xixB5_VI",
  authDomain: "trackme-at-kc.firebaseapp.com",
  databaseURL: "https://trackme-at-kc.firebaseio.com",
  projectId: "trackme-at-kc",
  storageBucket: "trackme-at-kc.appspot.com",
  messagingSenderId: "754392638282"
});
@NgModule({
  declarations: [MyApp, LoginComponent, ProfileComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    UserSettingsPageModule,
    DirectivesModule,
    HomePageModule,
    JourneyPageModule,
    MessageHistoryPageModule,
    ContactMgmtPageModule,
    JourneyStatusPageModule,
    ShareLocationPageModule,
    SignupPageModule,

    IonicStorageModule.forRoot({
      name: "__trackMeDb",
      driverOrder: ["indexeddb", "sqlite", "websql"]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, LoginComponent, ProfileComponent],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ContactsProvider,
    GroupContactProvider,
    SMS,
    Firebase
  ]
})
export class AppModule {}
