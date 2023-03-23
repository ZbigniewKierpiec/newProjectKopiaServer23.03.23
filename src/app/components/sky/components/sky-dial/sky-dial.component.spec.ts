import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyDialComponent } from './sky-dial.component';

describe('SkyDialComponent', () => {
  let component: SkyDialComponent;
  let fixture: ComponentFixture<SkyDialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyDialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
