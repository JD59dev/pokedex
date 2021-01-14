import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsPageModule } from '../settings/settings.module';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,

    children: [
      {
        path: 'national',
        loadChildren: () => import('../regions/national/national.module').then( m => m.NationalPageModule)
      },
      {
        path: 'favorites',
        loadChildren: () => import('../favorites/favorites.module').then( m => m.FavoritesPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then( m => SettingsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
