import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Grid1Component } from './grid-1.component';

const routes: Routes = [
  {
    path: '',
    component: Grid1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Grid1RoutingModule { }
