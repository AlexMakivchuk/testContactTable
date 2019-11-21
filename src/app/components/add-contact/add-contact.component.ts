import { Component, OnInit } from '@angular/core';
import {ContactModel} from "../../shared/interfaces/contact.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {GetDataService} from "../../shared/services/get-data.service";

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  public contact:  ContactModel = {name:'', phone: null, foto: '', id: null};
  addContactForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private getDataService: GetDataService) {
    this.buildForm()
  }

   private buildForm() {
    this.addContactForm = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(3)]),
      number: new FormControl()
    })
  }
  private onSubmit() {
    this.contact.name= this.addContactForm.value.name;
    this.contact.phone= this.addContactForm.value.number;
    this.getDataService.addContact(this.contact);
    this.addContactForm.reset();


  }

  ngOnInit() {
  }

}
