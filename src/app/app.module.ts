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
import { AppCommonModule } from "./components/common/app-common.module";
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserPageModule } from "./components/user-page/user-page.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    HeaderModule,
    FooterModule,
    AuthModule,
    AppRoutingModule,
    AppCommonModule,
    UserPageModule
  ],
  providers: [UserService, HttpService, AppCommonModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
