import {Component, OnInit} from '@angular/core';
import {ContactModel} from '../../shared/model/contact.model';
import {ContactStoreService} from '../../shared/services/contact-store.service';
import {Router} from "@angular/router";
// @ts-ignore
import {fadeStateTrigger} from "../../shared/animations";


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  animations:[fadeStateTrigger]
})
export class ContactsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'id'];
  dataSource;
  active= false;
  public contacts = [];
  public contact: ContactModel = {name: ' ', phone: '', id: null, photo: ' '};
  toogle = true;
  contactToggle = false;


  constructor(public contactStoreService: ContactStoreService,
              private router: Router) {
  }

  ngOnInit() {
    this.contactStoreService.getContacts().subscribe((x) => {
      this.dataSource = x.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    });
    this.contactStoreService.loadContacts();
  }


  openContactInfo(contact: ContactModel) {
    this.contactStoreService.selectContact(contact);
    this.router.navigate(['contact-info']);
    return this.active = !this.active;

  }

}
