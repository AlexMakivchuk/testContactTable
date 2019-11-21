import {Component, OnInit} from '@angular/core';
import {GetDataService} from "../../shared/services/get-data.service";
import {ContactModel} from "../../shared/interfaces/contact.model";



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'id'];
  dataSource;

  public paginator;
  public contacts = [];
  public contact: ContactModel= {name: ' ', phone: '', id: null, foto: ' '};
  toogle = true;
  contactToggle = false;
  toogleComponents() {
    if(this.toogle == true) {

    }
      this.toogle = !this.toogle;
      this.contactToggle = !this.contactToggle
  }

  constructor(public getDataService: GetDataService) {
  }

  ngOnInit() {
    this.getContacts();
  }

backToContacts(){
    this.getContacts();
    this.toogle = true;
    this.contactToggle = false;

}
openContactInfo(contact: ContactModel){
  this.getDataService.ContactInfo = contact;
  this.contactToggle = false;
  this.toogle = false;



}
private getContacts() {
  this.getDataService.getContacts().subscribe(x => {
    this.dataSource = x.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    this.getDataService.allContacts =  this.dataSource;
  });


}

}
