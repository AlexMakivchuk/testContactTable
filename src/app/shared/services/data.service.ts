import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {ContactModel} from '../model/contact.model';

export const URL = 'http://localhost:3000/';

// Нарушає SRP з SOLID принципів. Рознести на 2 класи контакти та юзер
@Injectable({providedIn: 'root'})
export class DataService {

  // Type?
  public allContacts: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public contactModel: BehaviorSubject<ContactModel> = new BehaviorSubject(undefined);
  // See: Subject, BehaviorSubject, AsyncSubject, EventEmitter, ReplaySubject
  // Observable, Promise

  constructor(public httpClient: HttpClient) {
  }

  // @ts-ignore
  public loadContacts(): Promise<[]> {
    return this.httpClient.get<[]>(URL + 'contacts').toPromise();
  }

  public addContact(contact: ContactModel): Observable<any> {
    return this.httpClient.post(URL + 'contacts', contact);
  }

  public deleteContact(id: number): Observable<any> {
    return this.httpClient.delete(URL + 'contacts/' + id);
  }

  saveUserData(contact: ContactModel): Observable<any> {
    return this.httpClient.put(URL + 'contacts/' + contact.id, contact);
  }

  findContact(value: any): Observable<[]> {
    // If you have loaded all data. You can get from allContacts and filtered from predicate
    const params = new HttpParams().append('q', value.toString());
    return this.httpClient.get<[]>(URL + 'contacts' + value, {params});
  }

}
