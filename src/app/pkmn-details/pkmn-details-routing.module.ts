import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PkmnDetailsPage } from './pkmn-details.page';

const routes: Routes = [
  {
    path: '',
    component: PkmnDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PkmnDetailsPageRoutingModule {}
