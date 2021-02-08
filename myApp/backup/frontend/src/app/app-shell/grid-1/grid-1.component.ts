import { Component, OnInit } from '@angular/core';

import { Grid1Service } from './grid-1.service';
import { IGrid1Item } from './grid-1.model';
import {catchError, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid-1.component.html',
  styleUrls: ['./grid-1.component.css']
})
export class Grid1Component implements OnInit {
  greyBoxUrl = '../../../assets/GreyBox.svg';
  warningMessageText = '';
  warningMessageOpen = false;
  gridItems$: Observable<IGrid1Item[]>;

  constructor(private gridService: Grid1Service) {}

  ngOnInit() {
    this.gridItems$ = this.gridService.getGridItems().pipe(catchError((error) => {
      this.warningMessageText =  `Request to get grid text failed: ${error}`;
      this.warningMessageOpen = true;
      return of(null);
    }));
  }

  handleWarningClose(open: boolean) {
    this.warningMessageOpen = open;
    this.warningMessageText = '';
  }
}
