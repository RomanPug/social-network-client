import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  trigger: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  triggerLoginFunc(arg) {
    this.trigger = arg === false ? true : false;
  }

}
