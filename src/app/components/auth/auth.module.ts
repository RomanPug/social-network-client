import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from "./auth.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppCommonModule } from "../common/app-common.module";
import { CustomDatePickerComponent } from "../common/custom-date-picker/custom-date-picker.component";
import { MatButtonModule } from "@angular/material";


@NgModule({
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    CommonModule,
    AppCommonModule
  ],
  exports: [
    AuthComponent,
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,

  ]
})
export class AuthModule { }
