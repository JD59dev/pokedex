import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KalosCoastalPage } from './kalos-coastal.page';

const routes: Routes = [
  {
    path: '',
    component: KalosCoastalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KalosCoastalPageRoutingModule {}
