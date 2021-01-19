import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KalosCentralPage } from './kalos-central.page';

const routes: Routes = [
  {
    path: '',
    component: KalosCentralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KalosCentralPageRoutingModule {}
