import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule

  ],
  exports: [
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule

  ]
})
export class SharedModule { }
