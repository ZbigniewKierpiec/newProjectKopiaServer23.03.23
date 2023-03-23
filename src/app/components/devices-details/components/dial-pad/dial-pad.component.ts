import { DialService } from 'src/app/services/dial.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dial-pad',
  templateUrl: './dial-pad.component.html',
  styleUrls: ['./dial-pad.component.scss']
})
export class DialPadComponent implements OnInit {
@Input()     numbers:number;
@Input()     leters:string;


pad:Observable<any[]>
  constructor(private dial:DialService) { }

  ngOnInit(): void {
this.pad  =  this.dial.getDials();
  }

}
