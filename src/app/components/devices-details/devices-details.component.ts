import {Diale } from '../devices/devices/diale';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Device } from '../devices/devices/device';
import { Devices } from '../devices/devices/devices';
import { Dial } from '../devices/devices/dial';
import { DialService } from 'src/app/services/dial.service';
import { map, Observable } from 'rxjs';


@Component({
  selector: 'app-devices-details',
  templateUrl: './devices-details.component.html',
  styleUrls: ['./devices-details.component.scss'],
})
export class DevicesDetailsComponent implements OnInit {
  device;
  deviceID;
  devices:Dial[]= Diale;
  devices2:Observable<any[]>;
  constructor(private activatedRoute: ActivatedRoute , private dial:DialService) {}
  test(item: any) {
    console.log('dziala   ' + item.name);
  }
  ngOnInit(): void {
    // this.deviceID = this.activatedRoute.snapshot.paramMap.get('id');
    // this.device = this.devices.find((x) => x.id == this.deviceID);
     this.devices2  = this.dial.getDials();
    this.activatedRoute.paramMap.subscribe((param) => {
      console.log(this.device)
      this.deviceID = param.get('id');
      // this.device = this.devices.find((x) => x.id == this.deviceID);
       this.device  = this.dial.getDials().pipe(

        map((data)=>data.find((x)=>x.id === console.log(this.deviceID)))
       )
    });
  }
}
