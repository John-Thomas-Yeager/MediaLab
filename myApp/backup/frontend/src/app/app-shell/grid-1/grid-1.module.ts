import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Grid1Component } from './grid-1.component';
import { Grid1RoutingModule } from './grid-1-routing.module';
import { GridItemComponent } from './grid-item/grid-item.component';
import { WarningMessageModule } from '../../shared/warning-message/warning-message.module';

@NgModule({
  declarations: [Grid1Component, GridItemComponent],
  imports: [
    CommonModule,
    WarningMessageModule,
    Grid1RoutingModule
  ]
})
export class Grid1Module { }
