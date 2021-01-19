import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalarIslePageRoutingModule } from './galar-isle-routing.module';

import { GalarIslePage } from './galar-isle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalarIslePageRoutingModule
  ],
  declarations: [GalarIslePage]
})
export class GalarIslePageModule {}
