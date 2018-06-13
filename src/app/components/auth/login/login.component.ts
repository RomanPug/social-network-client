import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthPasswordLength } from "../auth.config";
import { UserService } from "../../../services/user.service";
import { User } from "../user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  form: FormGroup;
  minLength = AuthPasswordLength.minLengthPassword;
  maxLength = AuthPasswordLength.maxLengthPassword;

  constructor(private _user: UserService) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, this.checkLength.bind(this)])
    });
  }

  onSubmit() {
    let user = this.loginUser();
    this._user.loginUser(user);
  }

  checkLength(control: FormControl) {
    if (control.value.length <= this.minLength || control.value.length >= this.maxLength) {
      return {
        'lengthError': true
      };
    }
    return null;
  }

  loginUser() {

      const {email, password} = this.form.value;
      const user = new User(email, password);

      return user;
  }

}
