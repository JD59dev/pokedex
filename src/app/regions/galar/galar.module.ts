import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalarPageRoutingModule } from './galar-routing.module';

import { GalarPage } from './galar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalarPageRoutingModule
  ],
  declarations: [GalarPage]
})
export class GalarPageModule {}
