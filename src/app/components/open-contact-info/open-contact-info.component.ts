import { Component, OnInit } from '@angular/core';
import {GetDataService} from "../../shared/services/get-data.service";
import {ContactModel} from "../../shared/interfaces/contact.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-open-contact-info',
  templateUrl: './open-contact-info.component.html',
  styleUrls: ['./open-contact-info.component.scss']
})
export class OpenContactInfoComponent implements OnInit {
  public contact:  ContactModel = {name:'', phone: null, foto: '', id: null};
  ContactForm: FormGroup;
  disableForm= false;
  constructor(private getDataService: GetDataService,
              private formBuilder: FormBuilder,) {
    this.buildForm();
    this.contact = getDataService.ContactInfo;

  }

  ngOnInit() {
    this.ContactForm.setValue(this.contact);

  }
  get name() { return this.ContactForm.get('name'); }
  get phone() { return this.ContactForm.get('phone'); }

  private buildForm() {
    this.ContactForm = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(3)]),
      phone: new FormControl(),
      id: new FormControl(),
      foto: new FormControl()
    })
  }
  private onSubmit() {
    this.getDataService.saveUserData(this.ContactForm.value);
    this.ContactForm.reset();


  }
  private deleteContact(id: number){
    this.getDataService.deleteContact(id);
    this.ContactForm.reset();
    this.disableForm = true;

  }
}
