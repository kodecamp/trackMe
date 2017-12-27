import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { HomePage } from "./home";
import { ContactPageModule } from "../../components/contact/contact.module";

@NgModule({
  declarations: [HomePage],
  imports: [ContactPageModule, IonicPageModule.forChild(HomePage)]
})
export class HomePageModule {}
