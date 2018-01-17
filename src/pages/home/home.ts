import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { MenuController } from "ionic-angular/components/app/menu-controller";
import { IonicPage } from "ionic-angular/navigation/ionic-page";
import { JourneyDetailsProvider } from "../../providers/journey-details/journey-details";
import { JourneyDetails } from "../../providers/journey-details/journey-details.model";
import { Observable } from "rxjs/Observable";
@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  journeyDetailsList: JourneyDetails[];
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    private journeyDetailsProvider: JourneyDetailsProvider
  ) {
    menuCtrl.swipeEnable(true);
    console.log("Notifications Provider : " + journeyDetailsProvider);
  }

  ionViewDidLoad() {
    console.log("inside ionViewDidLoad : -->");

    this.journeyDetailsProvider.fetchJourneyDetails().subscribe(list => {
      console.log("inside subscribe");
      console.log(list);
      this.journeyDetailsList = list;
      console.log(this.journeyDetailsList);
    });
  }

  showMenu() {
    this.menuCtrl.toggle();
  }

  navigateTo(page: string) {
    this.navCtrl.push(page);
  }

  showStatus(contactId: string) {
    this.navCtrl.push("JourneyStatusPage", {
      contactId: "1"
    });
  }
}
