import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Blank1Component } from './blank-1.component';
import { Blank1RoutingModule } from './blank-1-routing.module';


@NgModule({
  declarations: [Blank1Component],
  imports: [
    CommonModule,
    Blank1RoutingModule
  ]
})
export class Blank1Module { }
