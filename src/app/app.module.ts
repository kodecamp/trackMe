import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { LoginComponent } from "../components/login/login";
import { ContactComponent } from "../components/contact/contact";

import { UserSettingsPageModule } from "../pages/user-settings/user-settings.module";

@NgModule({
  declarations: [MyApp, HomePage, LoginComponent, ContactComponent],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), UserSettingsPageModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, LoginComponent, ContactComponent],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
