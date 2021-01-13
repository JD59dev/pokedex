import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnovaPage } from './unova.page';

const routes: Routes = [
  {
    path: '',
    component: UnovaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnovaPageRoutingModule {}
