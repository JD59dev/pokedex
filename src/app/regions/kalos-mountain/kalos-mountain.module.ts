import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KalosMountainPageRoutingModule } from './kalos-mountain-routing.module';

import { KalosMountainPage } from './kalos-mountain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KalosMountainPageRoutingModule
  ],
  declarations: [KalosMountainPage]
})
export class KalosMountainPageModule {}
