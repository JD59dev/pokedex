import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalarMainPage } from './galar-main.page';

const routes: Routes = [
  {
    path: '',
    component: GalarMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalarMainPageRoutingModule {}
