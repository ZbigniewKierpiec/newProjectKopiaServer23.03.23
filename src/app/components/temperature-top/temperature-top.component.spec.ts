import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureTopComponent } from './temperature-top.component';

describe('TemperatureTopComponent', () => {
  let component: TemperatureTopComponent;
  let fixture: ComponentFixture<TemperatureTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperatureTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
