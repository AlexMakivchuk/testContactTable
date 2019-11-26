import {Component, OnInit} from '@angular/core';
import {ContactModel} from '../../shared/model/contact.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../shared/services/data.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  public contact: ContactModel = {name: '', phone: null, photo: '', id: null};
  addContactForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private getDataService: DataService) {
    this.buildForm();
  }

  ngOnInit() {
  }

  private buildForm() {
    this.addContactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      number: new FormControl()
    });
  }

  private onSubmit() {
    this.contact.name = this.addContactForm.value.name;
    this.contact.phone = this.addContactForm.value.number;
    this.getDataService.addContact(this.contact).subscribe();
    this.addContactForm.reset();


  }

}
