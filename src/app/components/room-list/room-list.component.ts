import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent implements OnInit {
  @Input() text: string;
  @Input() lista:any;
  @Input() isActive:any;
  @Output() sprawdz = new EventEmitter();
  constructor() {}
  isSelected;
  check(lista) {
  
    this.sprawdz.emit(lista)
  }

  ngOnInit(): void {}
}
