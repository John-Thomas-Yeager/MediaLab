import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Grid1Component } from './grid-1.component';
import { GridItemComponent } from './grid-item/grid-item.component';
import { WarningMessageModule } from '../../shared/warning-message/warning-message.module';

describe('Grid1Component', () => {
  let component: Grid1Component;
  let fixture: ComponentFixture<Grid1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Grid1Component, GridItemComponent],
      imports: [WarningMessageModule, HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grid1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
