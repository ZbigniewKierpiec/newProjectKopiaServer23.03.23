import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Icon } from './model';
import { Icons } from './models';



@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.scss']
})
export class PowerComponent implements OnInit {
  dateTime: Date;
  icons: Icon[] = Icons;

  isSelected?;

  iconActive(item: Icon) {
    console.log(item);
    this.isSelected = item;
  }

  constructor() { }

  ngOnInit(): void {

    timer(0, 1000).subscribe(() => {
      this.dateTime = new Date();
    });


  }

}
