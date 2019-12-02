import {Component, ViewChild} from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {ContactModel} from '../../shared/model/contact.model';
import {MatTable} from '@angular/material/table';
import {ContactStoreService} from "../../shared/services/contact-store.service";

/**
 * @title Bottom Sheet Overview
 */
@Component({
  selector: 'bottom-sheet-overview-example',
  templateUrl: 'bottom-sheet-overview-example.html'
})
export class BottomSheetOverviewExample {
  constructor(private _bottomSheet: MatBottomSheet) {
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
  styleUrls: ['bottom-sheet-overview-example-sheet.scss']
})
export class BottomSheetOverviewExampleSheet {
  table;

  @ViewChild(MatTable, {static: false}) set matTable(mt: MatTable<Element>) {
    this.table = mt;
  }

  findValue: any;
  myArray;
  dataSource: ContactModel[] = [];
  selected = 'name';
  displayedColumns: string[] = ['id', 'name', 'phone', 'photo'];

  public contact: ContactModel;

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>,
              private contactStoreService: ContactStoreService) {
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  click(contactKey: string): void {
    if(contactKey === 'id') {
      this.findValue = +this.findValue;
      this.contactStoreService
        .findContact(c => c[contactKey] === this.findValue)
        .subscribe(result => this.dataSource = result);
    } else {
      this.contactStoreService
        .findContact(c => c[contactKey] === this.findValue)
        .subscribe(result => this.dataSource = result);
    }
    // this.myArray = this.getDataService.allContacts.getValue();
    // switch (value) {
    //   case 'name': {
    //     this.dataSource = this.myArray.filter(x => x.name === this.findValue);
    //
    //     break;
    //   }
    //   case 'phone': {
    //     this.dataSource = this.myArray.filter(x => x.phone === this.findValue);
    //     break;
    //   }
    //   case 'id': {
    //     this.findValue = +this.findValue;
    //     this.dataSource = this.myArray.filter(x => x.id === this.findValue);
    //     break;
    //   }
    // }
  }


}
