import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DPadTestComponent } from './d-pad-test.component';

describe('DPadTestComponent', () => {
  let component: DPadTestComponent;
  let fixture: ComponentFixture<DPadTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DPadTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DPadTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
