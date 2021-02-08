import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blank1Component } from './blank-1.component';

describe('Blank1Component', () => {
  let component: Blank1Component;
  let fixture: ComponentFixture<Blank1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Blank1Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blank1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
