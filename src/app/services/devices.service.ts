import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DevicesService {
onDevicesSend = new EventEmitter<{name:string , status:boolean}>();
onDeviceActive = new EventEmitter<string>();
users = new EventEmitter<{username:string , password:string}>();


sendLogin(user:{username:string,password:string}){
this.users.emit(user);
}

showDevicesName(device:{name:string , status:boolean}){
      this.onDevicesSend.emit(device)
}


setActiveDevice(device:string){
       this.onDeviceActive.emit(device)
}




  constructor() { }
}
