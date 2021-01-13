import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalarPage } from './galar.page';

const routes: Routes = [
  {
    path: '',
    component: GalarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalarPageRoutingModule {}
