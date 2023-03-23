import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-more1',
  templateUrl: './more1.component.html',
  styleUrls: ['./more1.component.scss']
})
export class More1Component implements OnInit {
  @Input() klasa:string;
  @Input() zee:string;
  @Output()  switch:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }



check(){
  this.switch.emit();
}




  ngOnInit(): void {
  }

}
