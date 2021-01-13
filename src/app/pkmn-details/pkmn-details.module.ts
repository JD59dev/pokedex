import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PkmnDetailsPageRoutingModule } from './pkmn-details-routing.module';

import { PkmnDetailsPage } from './pkmn-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PkmnDetailsPageRoutingModule
  ],
  declarations: [PkmnDetailsPage]
})
export class PkmnDetailsPageModule {}
