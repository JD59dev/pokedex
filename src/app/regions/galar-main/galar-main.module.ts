import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalarMainPageRoutingModule } from './galar-main-routing.module';

import { GalarMainPage } from './galar-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalarMainPageRoutingModule
  ],
  declarations: [GalarMainPage]
})
export class GalarMainPageModule {}
