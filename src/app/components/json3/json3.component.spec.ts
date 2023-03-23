import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Json3Component } from './json3.component';

describe('Json3Component', () => {
  let component: Json3Component;
  let fixture: ComponentFixture<Json3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Json3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Json3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
