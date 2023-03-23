import { UsersService } from 'src/app/services/users.service';

import { transition } from '@angular/animations';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked,
  AfterContentChecked,
} from '@angular/core';
import { DevicesService } from 'src/app/services/devices.service';
import { SwiperOptions } from 'swiper';

import SwiperCore, {
  Navigation,
  Scrollbar,
  Autoplay,
  A11y,
  Virtual,
  EffectFade,
  EffectCoverflow,
  EffectCube,
  EffectFlip,
} from 'swiper/core';

import { Device } from './devices/device';
import { Devices } from './devices/devices';
import { ActiveUserService } from 'src/app/services/active-user.service';
import { filter, identity, map, Observable } from 'rxjs';
import { User } from '../User/user';
import { parse } from 'path';
import { Dial } from './devices/dial';
import { Diale } from './devices/diale';
import { DialService } from 'src/app/services/dial.service';
SwiperCore.use([Navigation, A11y]);
SwiperCore.use([Virtual]);
SwiperCore.use([EffectCoverflow]);
SwiperCore.use([EffectCube]);
SwiperCore.use([EffectFlip]);
SwiperCore.use([EffectFade]);
SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
})
export class DevicesComponent implements OnInit {
  @Output() send: EventEmitter<string> = new EventEmitter<string>();
  devices: Device[] = Devices;
  // devices: Dial[] = Diale;
  devices2: Observable<any[]>;
  devicesDials: Observable<any[]>;



  check: boolean;
  activeDevice;
  config: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 10,
    speed: 500,
    navigation: false,
    autoplay: false,

    longSwipes: true,
    longSwipesMs: 800,
    longSwipesRatio: 0.7,

    effect: 'slide',
    pagination: { clickable: false },
    scrollbar: { draggable: false },
    virtual: true,
  };

  constructor(
    private device: DevicesService,
    private users: UsersService,
    private activeUser: ActiveUserService,
    private dials:DialService
  ) {}

  checked(item: Device) {
    this.check = !this.check;
    item.status = this.check;
  }

  deviceActive(item: Device) {
    this.activeDevice = item.name;
    this.send.emit(item.name);
    console.log('zbyszek czwartek' + item.name);
    let zee = {
      name: item.name,
      status: item.status,
      icon: item.icon,
    };
    this.device.onDevicesSend.emit(zee);
  }

  ngOnInit(): void {


 this.activeUser.onDevicesSend.subscribe((data)=>{
 data.id;
 })




    this.device.onDeviceActive.subscribe((data) => {
      this.activeDevice = data;
    });





    this.devices2 = this.users.getUserId();




    this.devicesDials   = this.dials.getDials();







  }
}
