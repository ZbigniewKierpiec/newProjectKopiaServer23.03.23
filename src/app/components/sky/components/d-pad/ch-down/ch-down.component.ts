import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ch-down',
  templateUrl: './ch-down.component.html',
  styleUrls: ['./ch-down.component.scss']
})
export class ChDownComponent implements OnInit {
  @Input()    name:string;
  @Input()    icon:string;
  @Input()    data:string;
  constructor() { }

  ngOnInit(): void {
  }

 dataDown(e){
    console.log(e.target.dataset.numbers)
 }


}
