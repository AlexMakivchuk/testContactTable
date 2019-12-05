import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ContactModel} from '../model/contact.model';
import {map, tap} from 'rxjs/operators';
import {ContactApiService} from './api/contact-api.service';

@Injectable({providedIn: 'root'})
export class ContactStoreService {

  private contacts = new BehaviorSubject<ContactModel[]>([]);
  private selectedContact = new BehaviorSubject<ContactModel>(null);

  constructor(private  contactApiService: ContactApiService) {
  }

  public loadContacts(): void {
    this.contactApiService.loadContacts().subscribe(c => this.updateContacts(c));
  }

  public getContacts(): Observable<ContactModel[]> {
    return this.contacts.asObservable();
  }

  public updateContacts(contacts: ContactModel[]): void {
    return this.contacts.next(contacts);
  }

  public findContact(predicate: (ContactModel) => boolean): Observable<ContactModel[]> {
    return this.contacts.pipe(
      map(contacts => contacts.filter(predicate))
    );
  }

  public selectContact(contact: ContactModel): void {
    this.selectedContact.next(contact);
  }

  public getSelectedContact(): Observable<ContactModel> {

    return this.selectedContact.asObservable();
  }

  public addContact(contact: ContactModel): Observable<any> {
    return this.contactApiService.addContact(contact)
      .pipe(
        tap(() => this.updateContacts([...this.contacts.getValue(), contact]))
      );
  }

  public updateContact(contact: ContactModel): Observable<any> {
    return this.contactApiService.updateContact(contact)
      .pipe(
        // tap(() => {
        //   const oldContact = this.contacts.getValue().find(c => c.id === contact.id);
        //   oldContact.name = contact.name;
        //   oldContact.phone = contact.phone;
        //   oldContact.photo = contact.photo;
        // })
        tap(() => this.loadContacts())
      );
  }
  public deleteContact(id: number) {
    return this.contactApiService.deleteContact(id)
  }
}
