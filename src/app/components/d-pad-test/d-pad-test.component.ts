import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SkyService } from '../sky/sky services/sky.service';

@Component({
  selector: 'app-d-pad-test',
  templateUrl: './d-pad-test.component.html',
  styleUrls: ['./d-pad-test.component.scss'],
})
export class DPadTestComponent implements OnInit {
  @Input() name: string;
  @Input() data: string;
  constructor(private sky: SkyService) {}

  skyData: Observable<any[]>;

  ngOnInit(): void {
    this.skyData = this.sky.getSky();
  }

  dpad(e) {
    console.log(e.target.dataset.numbers);
  }
}
