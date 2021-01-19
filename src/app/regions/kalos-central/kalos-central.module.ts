import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KalosCentralPageRoutingModule } from './kalos-central-routing.module';

import { KalosCentralPage } from './kalos-central.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KalosCentralPageRoutingModule
  ],
  declarations: [KalosCentralPage]
})
export class KalosCentralPageModule {}
