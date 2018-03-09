import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthDaysAndMonth, AuthPasswordLength, AuthYears } from "../auth.config";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  minLength = AuthPasswordLength.minLengthPassword;
  maxLength = AuthPasswordLength.maxLengthPassword;
  dates = AuthDaysAndMonth;
  years = [];
  days = [];
  selectedMonth: string = '';

  @ViewChild('month') month: ElementRef;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, this.checkLength.bind(this)]),
    });
    this.year();
  }

  onSubmit() {
    console.log(this.form);
  }

  checkLength(control: FormControl) {
    if (control.value.length < this.minLength && control.value.length < this.maxLength) {
      return {
        'lengthError': true
      };
    }
    return null;
  }

  year () {
    for (let year = AuthYears.minYear; year <= AuthYears.maxYear; year++) {
      this.years.push(year);
    }
  }

  onChange(event: Event) {
    if (event !== undefined) {
      this.selectedMonth = event.target['value'];
    }

    let daysCount: number;

    AuthDaysAndMonth.forEach(value => {
      if (value.type === this.selectedMonth) {
        daysCount = value.days;
      }
    });

    this.days = [];

    for (let days = 1; days <= daysCount; days++) {
      this.days.push(days);
    }
  }
}
