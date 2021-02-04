import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /* {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }, */
  {
    path: '',
    redirectTo: 'national',
    pathMatch: 'full'
  },
  {
    path: 'kanto',
    loadChildren: () => import('./regions/kanto/kanto.module').then(m => m.KantoPageModule)
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
    path: 'kalos-central',
    loadChildren: () => import('./regions/kalos-central/kalos-central.module').then( m => m.KalosCentralPageModule)
  },
  {
    path: 'kalos-coastal',
    loadChildren: () => import('./regions/kalos-coastal/kalos-coastal.module').then( m => m.KalosCoastalPageModule)
  },
  {
    path: 'kalos-mountain',
    loadChildren: () => import('./regions/kalos-mountain/kalos-mountain.module').then( m => m.KalosMountainPageModule)
  },
  {
    path: 'alola',
    loadChildren: () => import('./regions/alola/alola.module').then( m => m.AlolaPageModule)
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
  {
    path: 'galar-main',
    loadChildren: () => import('./regions/galar-main/galar-main.module').then( m => m.GalarMainPageModule)
  },
  {
    path: 'galar-isle',
    loadChildren: () => import('./regions/galar-isle/galar-isle.module').then( m => m.GalarIslePageModule)
  },
  {
    path: 'galar-tundra',
    loadChildren: () => import('./regions/galar-tundra/galar-tundra.module').then( m => m.GalarTundraPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
