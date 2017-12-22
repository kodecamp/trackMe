import { Component } from '@angular/core';

/**
 * Generated class for the ContactsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'contacts',
  templateUrl: 'contacts.html'
})
export class ContactsComponent {

  text: string;

  constructor() {
    console.log('Hello ContactsComponent Component');
    this.text = 'Hello World';
  }

}
