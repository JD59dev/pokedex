import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalarIslePage } from './galar-isle.page';

const routes: Routes = [
  {
    path: '',
    component: GalarIslePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalarIslePageRoutingModule {}
