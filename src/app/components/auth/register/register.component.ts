import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthPasswordLength } from "../auth.config";
import { UserService } from "../../../services/user.service";
import { User } from "../user.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  minLength = AuthPasswordLength.minLengthPassword;
  maxLength = AuthPasswordLength.maxLengthPassword;
  chosenDate: Date;
  chosenYearDate: Date;

  constructor(private _user: UserService) { }

  ngOnInit() {
    this.form = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, this.checkLength.bind(this)]),
      day_month: new FormControl(''),
      year: new FormControl(''),
      gender: new FormControl(''),
    });
  }

  onSubmit() {
    let user = this.createUser();
    this._user.registerUser(user).then((response) => {

    });
  }

  checkLength(control: FormControl) {
    if (control.value.length <= this.minLength || control.value.length >= this.maxLength) {
      return {
        'lengthError': true
      };
    }
    return null;
  }

  createUser() {

    const {email, password, firstname, lastname, day_month, year, gender} = this.form.value;
    const user = new User(email, password, firstname, lastname, day_month, year, gender);

    return user;
  }
}
