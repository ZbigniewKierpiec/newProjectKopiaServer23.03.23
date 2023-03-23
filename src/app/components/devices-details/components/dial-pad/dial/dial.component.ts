import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DialService } from 'src/app/services/dial.service';

@Component({
  selector: 'app-dial',
  templateUrl: './dial.component.html',
  styleUrls: ['./dial.component.scss']
})
export class DialComponent implements OnInit {
@Input()     numbers:number;
@Input()     leter:string;
@Input()     klasa:string;
@Input()     data:any;
constructor() { }
ngOnInit(): void { }



dataA(event){

console.log(event.target.dataset.numbers)

}

}
