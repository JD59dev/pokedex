import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalarTundraPageRoutingModule } from './galar-tundra-routing.module';

import { GalarTundraPage } from './galar-tundra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalarTundraPageRoutingModule
  ],
  declarations: [GalarTundraPage]
})
export class GalarTundraPageModule {}
