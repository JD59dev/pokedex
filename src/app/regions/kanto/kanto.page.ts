import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PkmnService } from 'src/app/services/pkmn.service';

@Component({
  selector: 'app-kanto',
  templateUrl: './kanto.page.html',
  styleUrls: ['./kanto.page.scss'],
})
export class KantoPage implements OnInit {
  pokemons = [];
  skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  constructor(
    private pkmn: PkmnService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.pokemons = [];

    this.pkmn.getKantoDex().then(pokemons => {
      setTimeout(() => this.pokemons = pokemons['pokemon_entries'], 1000);
    });
  }

  openPkmn(pkmn) {
    // When clicking on a Pokemon, this will take us to the pkmn-details page
    // 2nd parameter, we want to see the Pokemon's infos
    this.router.navigate(['/pkmn-details'], {state: { keyUser: pkmn }});
  }

}
