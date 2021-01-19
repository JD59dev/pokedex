import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KalosMountainPage } from './kalos-mountain.page';

const routes: Routes = [
  {
    path: '',
    component: KalosMountainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KalosMountainPageRoutingModule {}
