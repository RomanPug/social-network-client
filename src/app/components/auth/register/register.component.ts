import {Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthDaysAndMonth, AuthPasswordLength, AuthYears } from "../auth.config";
import { UserService } from "../../../services/user.service";
import { User } from "../user.model";
import {Observable} from "rxjs/Observable";

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
    this._user.registerUser(user);

    // console.log(this.form);
    // console.log(this.chosenYearDate);
    // console.log(this.chosenDate.getMonth() + 1, this.chosenDate.getDate(), this.chosenDate);
  }

  checkLength(control: FormControl) {
    if (control.value.length <= this.minLength || control.value.length >= this.maxLength) {
      return {
        'lengthError': true
      };
    }
    return null;
  }

  // year () {
  //   for (let year = AuthYears.minYear; year <= AuthYears.maxYear; year++) {
  //     this.years.push(year);
  //   }
  // }

  // onChange(event: Event) {
  //   if (event !== undefined) {
  //     this.selectedMonth = event.target['value'];
  //   }
  //
  //   let daysCount: number;
  //
  //   AuthDaysAndMonth.forEach(value => {
  //     if (value.type === this.selectedMonth) {
  //       daysCount = value.days;
  //     }
  //   });
  //
  //   this.days = [];
  //
  //   for (let days = 1; days <= daysCount; days++) {
  //     this.days.push(days);
  //   }
  // }
  //
  // defaultDays() {
  //   if (this.selectedMonth === '') {
  //     for (let days = 1; days <= 31; days++) {
  //       this.days.push(days);
  //     }
  //   }
  // }

  createUser() {

    const {email, password, firstname, lastname, day, month, year, gender} = this.form.value;
    const user = new User(email, password, firstname, lastname, day, month, year, gender);

    return user;
  }
}
