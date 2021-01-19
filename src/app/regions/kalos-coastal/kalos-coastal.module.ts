import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KalosCoastalPageRoutingModule } from './kalos-coastal-routing.module';

import { KalosCoastalPage } from './kalos-coastal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KalosCoastalPageRoutingModule
  ],
  declarations: [KalosCoastalPage]
})
export class KalosCoastalPageModule {}
