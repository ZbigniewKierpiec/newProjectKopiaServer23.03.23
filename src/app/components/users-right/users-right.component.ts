import { DevicesService } from 'src/app/services/devices.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Model } from '../users-right/model';
import { Models } from '../users-right/models';
import { Camera } from './cameras/camera';
import { Cameras } from './cameras/cameras';
import { Preset } from './presets/preset';
import { Presets } from './presets/presets';
import { Room } from './presets/room';
import { Rooms } from './presets/rooms';
import { map, observable, Observable } from 'rxjs';
import { User } from '../User/user';
import { Users } from '../User/users';
import { ActiveUserService } from 'src/app/services/active-user.service';



@Component({
  selector: 'app-users-right',
  templateUrl: './users-right.component.html',
  styleUrls: ['./users-right.component.scss'],
})
export class UsersRightComponent implements OnInit {
  @Output() send: EventEmitter<number> = new EventEmitter<number>();
  isActive: boolean = false;
  users: Model[] = Models;
  liczba:any=0;
  userName: string = 'John';
  userImage: string = 'assets/user.jpeg';
  cameraT: boolean = false;
  cameras: Camera[] = Cameras;
  cameraActive: boolean;
  cameraImage: string = 'assets/garden.jpg';
  cameraName: string = 'garden';
  dotActive: boolean = true;
  isSelected: any;
  presets: Preset[] = Presets;
  isSelectedPresets: string;
  rooms: Room[] = Rooms;
  user_name: string = '';
  user__password: string = '';
  // uzytkownicy:Observable<Model[]>;
  uzytkownicy:Observable<Users[]>;

  constructor(private login: DevicesService, private Users: UsersService , private activeUser:ActiveUserService) {}

  user() {
    this.isActive = !this.isActive;

  }

  userChange(item:any) {

    this.userName = item.name;
    this.userImage = item.image;
    this.isActive=false;
   this.liczba = item;
   console.log(item)







    //  this.Users.getUsers().pipe(
    //   map((user) => user.filter((e) => e.id === item.id))
    // );

    this.activeUser.onDevicesSend.emit(item)


  }

  camera() {

    this.cameraT = !this.cameraT;
  }

  cameraC(item: Camera) {

    this.cameraImage = item.image;
    this.cameraName = item.name;
    this.cameraActive = item.active;
    this.dotActive = item.active;
    this.isSelected = item.name;
  }

  startRecord(item: Camera) {
    console.log('Nagrywa');
    item.active = true;
  }
  stopRecording(item: Camera) {
    item.active = false;
  }

  presetsClick(item: Preset) {

    this.isSelectedPresets = item.name;
  }




  ngOnInit(): void {
    this.login.users.subscribe((e) => {
      this.user_name = e.username;
      this.user__password = e.password;
      console.log(
        'To jest z user  user-right copmponent' +
          this.user_name +
          this.user__password
      );



    });

       this.uzytkownicy   =     this.Users.getUsers();






  }
}
