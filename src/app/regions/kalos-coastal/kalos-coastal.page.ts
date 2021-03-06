import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PkmnService } from 'src/app/services/pkmn.service';

@Component({
  selector: 'app-kalos-coastal',
  templateUrl: './kalos-coastal.page.html',
  styleUrls: ['./kalos-coastal.page.scss'],
})
export class KalosCoastalPage implements OnInit {
  pokemons = [];
  skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  constructor(
    private pkmnService: PkmnService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.pokemons = [];

    this.pkmnService.getKalosCoastalDex().then(pokemons => {
      setTimeout(() => this.pokemons = pokemons['pokemon_entries'], 1000);
    });
  }

  openPkmn(pkmn) {
    this.router.navigate(['/pkmn-details'], {state: { keyUser: pkmn }});
  }

}
