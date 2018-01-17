// import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GroupContact } from "./group-contact.model";
import { AngularFirestore } from "angularfire2/firestore";
import { UserProfile } from "../user-profiles/user-profile.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class GroupContactProvider {
  private readonly USER_PROFILES = "user-profiles";
  private $userProfiles: Observable<any[]>;

  /**constructor
   *
   * @param fireStore
   */
  constructor(private fireStore: AngularFirestore) {
    this.$userProfiles = this.fireStore
      .collection(this.USER_PROFILES)
      .valueChanges();
  }

  /**
   *returns all the records from userPorfiles
   */
  getAllRegisteredUsers(): Observable<UserProfile[]> {
    return this.$userProfiles;
  }
}
