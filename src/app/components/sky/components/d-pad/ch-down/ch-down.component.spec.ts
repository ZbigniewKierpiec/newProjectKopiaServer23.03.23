import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChDownComponent } from './ch-down.component';

describe('ChDownComponent', () => {
  let component: ChDownComponent;
  let fixture: ComponentFixture<ChDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
