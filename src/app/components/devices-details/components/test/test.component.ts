import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  @Output() handleClick = new EventEmitter<string>();
  @Input() name: string;
  @Input() icon: string;

  click() {
  this.handleClick.emit()
  }

  constructor() {}

  ngOnInit(): void {}
}
