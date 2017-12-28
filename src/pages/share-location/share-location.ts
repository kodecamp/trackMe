import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { GroupContactProvider } from "../../providers/group-contact/group-contact";
import { GroupContact } from "../../providers/group-contact/group-contact.model";

@IonicPage()
@Component({
  selector: "page-share-location",
  templateUrl: "share-location.html"
})
export class ShareLocationPage {
  linkImage: string = "assets/imgs/link.svg";
  isHidden: boolean = true;
  groupContacts: GroupContact[] = [];
  constructor(
    public navCtrl: NavController,
    private groupContactProvider: GroupContactProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ShareLocationPage");
    this.groupContacts = this.fetchContacts();
  }

  private fetchContacts() {
    return this.groupContactProvider.fetchGroupContacts();
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
    this.groupContacts = this.fetchContacts();
    let value = event.target.value;
    if (value === undefined || value.trim() === "") {
      return;
    }
    this.groupContacts = this.groupContacts.filter(groupContact => {
      // if searched string is found any where in the name
      return (
        groupContact.name.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
        groupContact.mobileNo.indexOf(value) > -1
      );
    });
  }
}
