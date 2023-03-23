import { DevicesService } from 'src/app/services/devices.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-temperature-top',
  templateUrl: './temperature-top.component.html',
  styleUrls: ['./temperature-top.component.scss'],
})
export class TemperatureTopComponent implements OnInit {
  @Output() start: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() room: string;
  @Input() active: boolean;
  constructor(private login: DevicesService) {}
  userName: string = '';
  userPassword: string = '';

  dropDown() {
    this.active = !this.active;

    this.start.emit(this.active);
  }

  logIn() {
    console.log(this.userName, this.userPassword);

    let user = {
      username: this.userName,
      password: this.userPassword,
    };

    this.login.users.emit(user);
    this.userName = '';
    this.userPassword = '';
  }

  ngOnInit(): void {}
}
