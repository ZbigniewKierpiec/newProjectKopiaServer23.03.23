import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DevicesService } from 'src/app/services/devices.service';

@Component({
  selector: 'app-apple-tv',
  templateUrl: './apple-tv.component.html',
  styleUrls: ['./apple-tv.component.scss']
})
export class AppleTvComponent implements OnInit {
  @Output() check:EventEmitter<boolean> = new EventEmitter<boolean>();
  appleTvActive:boolean= true;
  constructor(private devices:DevicesService) { }




apple(){
  this.appleTvActive=false;
  this.check.emit(this.appleTvActive)
  this.devices.onDeviceActive.emit('')
}






  ngOnInit(): void {
  }

}
