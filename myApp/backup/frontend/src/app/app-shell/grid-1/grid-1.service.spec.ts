import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Grid1Service } from './grid-1.service';

describe('Grid1Service', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    }).compileComponents();
  }));

  it('should be created', () => {
    const service: Grid1Service = TestBed.inject(Grid1Service);
    expect(service).toBeTruthy();
  });
});
