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
import {MatButtonModule, MatRadioModule} from "@angular/material";
import {HeaderModule} from "../header/header.module";
import {FooterModule} from "../footer/footer.module";
import { MessageComponent } from './message/message.component';


@NgModule({
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    BrowserAnimationsModule,
    CommonModule,
    AppCommonModule,
    HeaderModule,
    FooterModule,
  ],
  exports: [
    AuthComponent,
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    MessageComponent,
  ]
})
export class AuthModule { }
