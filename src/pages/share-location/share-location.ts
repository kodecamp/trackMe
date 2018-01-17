import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { GroupContactProvider } from "../../providers/group-contact/group-contact";
import { GroupContact } from "../../providers/group-contact/group-contact.model";
import { NavParams } from "ionic-angular/navigation/nav-params";
import { UserProfile } from "../../providers/user-profiles/user-profile.model";
import { JourneyDetails } from "../../providers/journey-details/journey-details.model";

@IonicPage()
@Component({
  selector: "page-share-location",
  templateUrl: "share-location.html"
})
export class ShareLocationPage {
  linkImage: string = "assets/imgs/link.svg";
  isHidden: boolean = true;
  groupContacts: GroupContact[] = [];
  private from: string;
  private to: string;
  constructor(
    private navCtrl: NavController,
    private gcProvider: GroupContactProvider,
    private navParams: NavParams
  ) {
    this.from = navParams.get("from");
    this.to = navParams.get("to");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ShareLocationPage");
    // this.groupContacts = this.fetchContacts();

    const obj = this.gcProvider.getAllRegisteredUsers().subscribe(users => {
      console.log("inside subscibe");
      console.log(users);
      this.groupContacts = users.map((userProfile: UserProfile) => {
        return new GroupContact(userProfile, false);
      });
      obj.unsubscribe();
    });

    // obj.unsubscribe();
  }

  private fetchContacts() {
    // return this.groupContactProvider.fetchGroupContacts();
  }

  select(id: string, item: any) {
    console.log(item);
    if (item.color === "") {
      item.setAttribute("color", "primary");
      console.log("if condition");
    } else {
      item.color = "";
      console.log("else condition");
    }
  }

  toggleSearchBar() {
    console.log(this.isHidden);
    this.isHidden = !this.isHidden;
  }

  toggleConnectivity(groupContact: GroupContact) {
    groupContact.isConnected = !groupContact.isConnected;
  }

  searchItems(event: any) {
    this.groupContacts = this.groupContacts;
    let value = event.target.value;
    if (value === undefined || value.trim() === "") {
      return;
    }
    this.groupContacts = this.groupContacts.filter(
      (groupContact: GroupContact) => {
        // if searched string is found any where in the name
        return (
          groupContact.userProfile.user_name
            .toLowerCase()
            .indexOf(value.toLowerCase()) > -1 ||
          groupContact.userProfile.mobile_no.indexOf(value) > -1
        );
      }
    );
  }

  startNewJouney() {
    const connectWith = this.groupContacts.filter(
      (groupcontact: GroupContact) => {
        return groupcontact.isConnected;
      }
    );
  }

  private createJourneyDetails(): JourneyDetails {
    return new JourneyDetails();
  }
}
