import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-sky-dial',
  templateUrl: './sky-dial.component.html',
  styleUrls: ['./sky-dial.component.scss']
})
export class SkyDialComponent implements OnInit {

  @Input() number:number;
  @Input() text:string;
  @Input() klasa:string;
  @Input() data:string;
  constructor() { }

  ngOnInit(): void {
  }



dataCheck(event){

  console.log(event.target.dataset.numbers)


}







}
