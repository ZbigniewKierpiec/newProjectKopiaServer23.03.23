import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChUpComponent } from './ch-up.component';

describe('ChUpComponent', () => {
  let component: ChUpComponent;
  let fixture: ComponentFixture<ChUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
