﻿import { Component, OnInit, Input } from '@angular/core';
import { IGrid1Item } from '../grid-1.model';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.css']
})
export class GridItemComponent implements OnInit {
  @Input() key: number;
  @Input() gridItem: IGrid1Item;

  constructor() {}

  ngOnInit() {}
}
