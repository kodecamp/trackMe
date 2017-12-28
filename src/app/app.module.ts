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
import { ContactsProvider } from "../providers/contacts/contacts";
import { JourneyStatusPageModule } from "../pages/journey-status/journey-status.module";
import { ShareLocationPageModule } from "../pages/share-location/share-location.module";

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
    ShareLocationPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, LoginComponent, ProfileComponent],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ContactsProvider
  ]
})
export class AppModule {}
