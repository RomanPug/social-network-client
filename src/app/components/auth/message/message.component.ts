import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

    @Input() message: String;
    @Input() time: Number;

  constructor() { }

  ngOnInit() {

  }

  hide() {
      if (this.message) {
          window.setTimeout(() => {
              this.message = '';
          }, 5000);
      }
  }

}
