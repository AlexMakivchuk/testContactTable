import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactStoreService} from '../../shared/services/contact-store.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  addContactForm: FormGroup;

  constructor(public contactStoreService: ContactStoreService,
              private router: Router) {
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.addContactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phone: new FormControl()
    });
  }

  private onSubmit(): void {
    this.contactStoreService
      .addContact(this.addContactForm.value)
      .subscribe(() => this.router.navigate(['../contacts']), () => alert('Can\'t add'));
  }

}
