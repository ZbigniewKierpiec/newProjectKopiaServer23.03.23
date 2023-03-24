import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-btn',
  templateUrl: './color-btn.component.html',
  styleUrls: ['./color-btn.component.scss']

})
export class ColorBtnComponent implements OnInit {
  @Input() klasa: string;
  @Input() color: string;
  @Input() data: string;

  constructor() {}

  getAtr(event) {
    console.log(event.target.dataset.numbers);
  }



  ngOnInit(): void {
  }

}
