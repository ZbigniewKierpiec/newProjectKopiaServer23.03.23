import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { User } from '../components/User/user';

@Injectable({
  providedIn: 'root',
})
export class ActiveUserService {
  onDevicesSend = new EventEmitter<{id:number}>();
  // osUserSend = new EventEmitter<{ name: string; id: number }>();
  showDevicesName(Devices:{ id:number}) {
    this.onDevicesSend.emit(Devices);
  }

  constructor() {}
}
// id:item.id,
//     device:item.device,
//     status:item.status,
//     icon:item.icon
