import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-more2',
  templateUrl: './more2.component.html',
  styleUrls: ['./more2.component.scss']
})
export class More2Component implements OnInit {
  @Output()  switch:EventEmitter<boolean> = new EventEmitter<boolean>();
  closeMore2(){
    this.switch.emit();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
