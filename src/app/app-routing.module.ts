import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {AddContactComponent} from "./components/add-contact/add-contact.component";
import {OpenContactInfoComponent} from "./components/open-contact-info/open-contact-info.component";
import {ContactsComponent} from "./components/contacts/contacts.component";


const routes: Routes = [
  {path: '', redirectTo: 'contact', pathMatch: 'full'},
  {path: 'contacts', component: ContactsComponent},
  {path: 'add-contact', component: AddContactComponent},
  {path: 'contact-info', component: OpenContactInfoComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
