import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
 @Input()   name1:string;
 @Input()   name2:string;
 @Input()   name3:string;
 @Input()   icon:string;
 @Input()   data:string;
  constructor() { }

  ngOnInit(): void {
  }




  dataReset(e){
     console.log(e.target.dataset.numbers)
  }

}
