import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContactsComponent} from './components/contacts/contacts.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {
  BottomSheetOverviewExample,
  BottomSheetOverviewExampleSheet
} from './components/bottom-sheet/BottomSheetOverviewExample';
import {DemoMaterialModule} from './components/bottom-sheet/material-module';
import {AddContactComponent} from './components/add-contact/add-contact.component';
import {OpenContactInfoComponent} from './components/open-contact-info/open-contact-info.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    BottomSheetOverviewExample,
    BottomSheetOverviewExampleSheet,
    AddContactComponent,
    OpenContactInfoComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
    DemoMaterialModule
  ],
  entryComponents: [BottomSheetOverviewExample, BottomSheetOverviewExampleSheet],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
