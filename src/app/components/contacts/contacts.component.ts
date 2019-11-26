import {Component, OnInit} from '@angular/core';
import {DataService} from '../../shared/services/data.service';
import {ContactModel} from '../../shared/model/contact.model';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'id'];
  dataSource;

  public paginator;
  public contacts = [];
  public contact: ContactModel = {name: ' ', phone: '', id: null, photo: ' '};
  toogle = true;
  contactToggle = false;

  toogleComponents() {
    if (this.toogle === true) {

    }
    this.toogle = !this.toogle;
    this.contactToggle = !this.contactToggle;
  }

  constructor(public getDataService: DataService) {
  }

  ngOnInit() {
    this.getDataService.loadContacts();
    this.getDataService.allContacts.subscribe((x) => {
      this.dataSource = x.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    });
  }

  backToContacts() {
    this.toogle = true;
    this.contactToggle = false;
  }

  openContactInfo(contact: ContactModel) {
    this.getDataService.contactModel.next(contact);
    this.contactToggle = false;
    this.toogle = false;
  }

}
