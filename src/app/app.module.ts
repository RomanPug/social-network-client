import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HeaderModule} from "./components/header/header.module";
import {FooterModule} from "./components/footer/footer.module";
import {AuthModule} from "./components/auth/auth.module";
import {AppRoutingModule} from "./app-routing.module";
import { UserService } from "./services/user.service";
import { HttpService } from "./services/http.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    HeaderModule,
    FooterModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [UserService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
