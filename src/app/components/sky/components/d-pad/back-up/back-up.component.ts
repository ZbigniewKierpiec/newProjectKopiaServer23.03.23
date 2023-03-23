import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-up',
  templateUrl: './back-up.component.html',
  styleUrls: ['./back-up.component.scss']
})
export class BackUpComponent implements OnInit {
  @Input()    name:string;
  @Input()    icon:string;
  @Input()    data:string;
  constructor() { }

  ngOnInit(): void {
  }


  dataBackup(e){
    console.log(e.target.dataset.numbers)
  }

}
