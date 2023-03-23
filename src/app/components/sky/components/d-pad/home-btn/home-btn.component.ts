import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-btn',
  templateUrl: './home-btn.component.html',
  styleUrls: ['./home-btn.component.scss']
})
export class HomeBtnComponent implements OnInit {
  @Input()    name:string;
  @Input()    icon:string;
  @Input()    data:string;
  constructor() { }

 dataHome(e){
    console.log(e.target.dataset.numbers)
 }


  ngOnInit(): void {
  }

}
