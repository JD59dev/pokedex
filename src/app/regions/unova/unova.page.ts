import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PkmnService } from 'src/app/services/pkmn.service';

@Component({
  selector: 'app-unova',
  templateUrl: './unova.page.html',
  styleUrls: ['./unova.page.scss'],
})
export class UnovaPage implements OnInit {
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

    this.pkmnService.getUnovaDex().then(pokemons => {
      setTimeout(() => this.pokemons = pokemons['pokemon_entries'], 1000);
    });
  }

  openPkmn(pkmn) {
    this.router.navigate(['/pkmn-details'], { state: { keyUser: pkmn }});
  }

}
