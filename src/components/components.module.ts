import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login";
import { ContactsComponent } from './contacts/contacts';
@NgModule({
  declarations: [LoginComponent,
    ContactsComponent],
  imports: [],
  exports: [LoginComponent,
    ContactsComponent]
})
export class ComponentsModule {}
