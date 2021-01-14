import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /* {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }, */
  {
    path: '',
    redirectTo: 'tabs/all',
    pathMatch: 'full'
  },
  {
    path: 'johto',
    loadChildren: () => import('./regions/johto/johto.module').then( m => m.JohtoPageModule)
  },
  {
    path: 'hoenn',
    loadChildren: () => import('./regions/hoenn/hoenn.module').then( m => m.HoennPageModule)
  },
  {
    path: 'sinnoh',
    loadChildren: () => import('./regions/sinnoh/sinnoh.module').then( m => m.SinnohPageModule)
  },
  {
    path: 'unova',
    loadChildren: () => import('./regions/unova/unova.module').then( m => m.UnovaPageModule)
  },
  {
    path: 'kalos',
    loadChildren: () => import('./regions/kalos/kalos.module').then( m => m.KalosPageModule)
  },
  {
    path: 'alola',
    loadChildren: () => import('./regions/alola/alola.module').then( m => m.AlolaPageModule)
  },
  {
    path: 'galar',
    loadChildren: () => import('./regions/galar/galar.module').then( m => m.GalarPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'pkmn-details',
    loadChildren: () => import('./pkmn-details/pkmn-details.module').then( m => m.PkmnDetailsPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'national',
    loadChildren: () => import('./regions/national/national.module').then( m => m.NationalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
