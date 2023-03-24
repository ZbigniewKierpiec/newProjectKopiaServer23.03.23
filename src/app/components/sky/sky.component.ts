import { Observable } from 'rxjs';
import { Icon } from './../power/model';
import { Device } from './../devices/devices/device';
import { Devices } from './../devices/devices/devices';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { DevicesService } from 'src/app/services/devices.service';
import { SkyService } from './sky services/sky.service';

@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.scss'],
})
export class SkyComponent {
  @Input() active: string;
  @Input() data: string;
  @Output() check: EventEmitter<boolean> = new EventEmitter<boolean>();
  skyActive: boolean = true;
  skyData: Observable<any[]>;

  constructor(
    private devices: DevicesService,
    private skyServices: SkyService
  ) {
    this.skyData = this.skyServices.getSky();
  }

  sky() {
    this.skyActive = false;
    this.check.emit(this.skyActive);
    this.devices.onDeviceActive.emit('');
  }
  dataHome(event) {
    console.log(event.target.dataset.number);
  }

  dataBackup(e) {
    console.log(e.target.dataset.numbers);
  }

  checkData(event) {
    console.log(event.target.dataset.numbers);
  }
  dataMiddle(e) {
    console.log(e.target.dataset.numbers);
  }

  searchesData(e) {
    console.log(e.target.dataset.numbers);
  }
}
