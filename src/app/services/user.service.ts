import { Injectable } from '@angular/core';
import { User } from "../components/auth/user.model";
import { BaseConfig } from "../configs/base.config";
import { HttpService } from "./http.service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService {
  constructor(private _http: HttpClient) {}

  registerUrl = BaseConfig.registerUrl;
  loginUrl = BaseConfig.loginUrl;

  registerUser(user: User): Promise<any> {
    return this._http.post(this.registerUrl, user).toPromise()
      .then((response) => {
        console.log(response);
      });
  }

  loginUser(user: User): Promise<any> {
    return this._http.post(this.loginUrl, user).toPromise()
      .then((response) => {
        console.log(response);
      });
  }

}
