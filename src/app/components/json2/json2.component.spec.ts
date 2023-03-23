import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Json2Component } from './json2.component';

describe('Json2Component', () => {
  let component: Json2Component;
  let fixture: ComponentFixture<Json2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Json2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Json2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
