import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthPasswordLength } from "../auth.config";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  form: FormGroup;
  minLength = AuthPasswordLength.minLengthPassword;
  maxLength = AuthPasswordLength.maxLengthPassword;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, this.checkLength.bind(this)])
    });
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
}
