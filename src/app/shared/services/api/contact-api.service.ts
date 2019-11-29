import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContactModel} from '../../model/contact.model';
import {Observable} from 'rxjs';

export const URL = 'http://localhost:3000/';

@Injectable({providedIn: 'root'})
export class ContactApiService {

  constructor(public httpClient: HttpClient) {
  }

  public loadContacts(): Observable<[]> {
    return this.httpClient.get<[]>(URL + 'contacts');
  }

  public addContact(contact: ContactModel): Observable<any> {
    return this.httpClient.post(URL + 'contacts', contact);
  }

  public updateContact(contact: ContactModel): Observable<any> {
    return this.httpClient.put(`${URL}contacts/${contact.id}`, contact);
  }

  public deleteContact(id: number): Observable<any> {
    return this.httpClient.delete(URL + 'contacts/' + id);
  }
}
