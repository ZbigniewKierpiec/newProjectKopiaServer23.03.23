import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ch-up',
  templateUrl: './ch-up.component.html',
  styleUrls: ['./ch-up.component.scss']
})
export class ChUpComponent implements OnInit {
@Input()    name:string;
@Input()    icon:string;
@Input()    data:string;
  constructor() { }

  ngOnInit(): void {
  }

dataUp(e){
console.log(e.target.dataset.numbers)
}


}
