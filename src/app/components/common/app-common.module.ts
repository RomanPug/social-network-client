import { NgModule } from '@angular/core';
import {
  CustomDatePickerComponent,
} from './custom-date-picker/custom-date-picker.component';
import {
  MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatIconModule,
  MatInputModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { YearPickerComponent } from "./custom-date-picker/year-picker-component/year-picker.component";
import { RegularDatepickerComponent } from "./custom-date-picker/regular-datepicker-component/regular-datepicker.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule

  ],
  exports: [
    CustomDatePickerComponent
  ],
  declarations: [
    CustomDatePickerComponent,
    YearPickerComponent,
    RegularDatepickerComponent,
  ]
})
export class AppCommonModule { }
