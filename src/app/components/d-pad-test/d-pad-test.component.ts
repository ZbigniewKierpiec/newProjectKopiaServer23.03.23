import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SkyService } from '../sky/sky services/sky.service';

@Component({
  selector: 'app-d-pad-test',
  templateUrl: './d-pad-test.component.html',
  styleUrls: ['./d-pad-test.component.scss'],
})
export class DPadTestComponent {
  @Input() name: string;
  @Input() data: string;
  constructor(private sky: SkyService) {
    this.skyData = this.sky.getSky();
  }

  skyData: Observable<any[]>;

  dpad(e) {
    console.log(e.target.dataset.numbers);
  }
}
