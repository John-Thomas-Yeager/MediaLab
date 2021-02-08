import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Blank1Component } from './blank-1.component';

const routes: Routes = [
  {
    path: '',
    component: Blank1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Blank1RoutingModule { }
