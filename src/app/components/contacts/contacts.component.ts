import {Component, OnInit} from '@angular/core';
import {ContactModel} from '../../shared/model/contact.model';
import {ContactStoreService} from '../../shared/services/contact-store.service';
import {Router} from "@angular/router";


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

  constructor(public contactStoreService: ContactStoreService,
              private router: Router) {
  }

  ngOnInit() {
    this.contactStoreService.getContacts().subscribe((x) => {
      this.dataSource = x.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    });
    this.contactStoreService.loadContacts();
  }

  backToContacts() {
    this.toogle = true;
    this.contactToggle = false;
    this.contactStoreService.loadContacts();
  }

  openContactInfo(contact: ContactModel): void {
    this.contactStoreService.selectContact(contact);
    this.router.navigate(['contact-info']);

  }

}
