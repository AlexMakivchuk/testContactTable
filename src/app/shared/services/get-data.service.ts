import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ContactModel} from "../interfaces/contact.model";

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  public allContacts = [];
  public ContactInfo: ContactModel;
  constructor(public http: HttpClient) { }
 // @ts-ignore
  public getContacts():Observable<Array> {
return this.http.get('http://localhost:3000/contacts');

 }
 public addContact(contact: ContactModel) {
    return this.http.post('http://localhost:3000/contacts', contact).subscribe();

 }
 public deleteContact(id: number) {
  return this.http.delete('http://localhost:3000/contacts/'+id).subscribe()
 }
  saveUserData(contact: ContactModel) {
    return this.http.put('http://localhost:3000/contacts/' + contact.id, contact).subscribe()

  }
  findContact(value:any){
    return this.http.get('http://localhost:3000/contacts?q=' + value);
  }
}
