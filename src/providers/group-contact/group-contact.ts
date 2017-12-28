// import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GroupContact } from "./group-contact.model";
/*
  Generated class for the GroupContactProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroupContactProvider {
  constructor() {
    console.log("Hello GroupContactProvider Provider");
  }

  fetchGroupContacts(): GroupContact[] {
    return this.createGroupContacts();
  }

  private createGroupContacts(): GroupContact[] {
    return [
      {
        name: "Sunil",
        mobileNo: "456464645",
        profileImgPath: "assets/imgs/avatars/3.svg",
        isConnected: false
      },
      {
        name: "Rakesh",
        mobileNo: "55555555",
        profileImgPath: "assets/imgs/avatars/4.svg",
        isConnected: false
      },
      {
        name: "Suresh Yadav",
        mobileNo: "444444",
        profileImgPath: "assets/imgs/avatars/5.svg",
        isConnected: false
      },
      {
        name: "Dinesh Kumar",
        mobileNo: "33333",
        profileImgPath: "assets/imgs/avatars/1.svg",
        isConnected: false
      },
      {
        name: "Sunil",
        mobileNo: "2222222",
        profileImgPath: "assets/imgs/avatars/2.svg",
        isConnected: false
      },
      {
        name: "Sunil",
        mobileNo: "1111111",
        profileImgPath: "assets/imgs/avatars/5.svg",
        isConnected: false
      }
    ];
  }
}
