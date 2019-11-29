import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactStoreService} from '../../shared/services/contact-store.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  addContactForm: FormGroup;

  constructor(public contactStoreService: ContactStoreService) {
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.addContactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      number: new FormControl()
    });
  }

  private onSubmit(): void {
    this.contactStoreService
      .addContact(this.addContactForm.value)
      .subscribe(() => this.addContactForm.reset(), () => alert('Can\'t add'));
  }

}
