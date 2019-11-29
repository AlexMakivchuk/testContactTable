import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactStoreService} from '../../shared/services/contact-store.service';

@Component({
  selector: 'app-open-contact-info',
  templateUrl: './open-contact-info.component.html',
  styleUrls: ['./open-contact-info.component.scss']
})
export class OpenContactInfoComponent implements OnInit {

  formGroup: FormGroup;
  disableForm = false;

  constructor(private contactStoreService: ContactStoreService) {
    this.buildForm();
  }

  ngOnInit() {
    this.contactStoreService
      .getSelectedContact()
      .subscribe(c => this.formGroup.reset(c));
  }

  get name() {
    return this.formGroup.get('name');
  }

  get phone() {
    return this.formGroup.get('phone');
  }

  private buildForm() {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phone: new FormControl(''),
      id: new FormControl(),
      photo: new FormControl('')
    });
  }

  private onSubmit() {
    this.contactStoreService.updateContact(this.formGroup.value).subscribe();
  }

  private deleteContact(id: number) {
    // TODO
    // this.getDataService.deleteContact(id).subscribe();
    // this.formGroup.reset();
    // this.disableForm = true;
  }

}
