import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pkmn-details',
  templateUrl: './pkmn-details.page.html',
  styleUrls: ['./pkmn-details.page.scss'],
})
export class PkmnDetailsPage implements OnInit {
  pokemon: any = {} // Initializing the Pokemon as an empty object

  constructor(private router: Router) { }

  ngOnInit() {
    this.pokemon = this.router.getCurrentNavigation().extras.state.keyUser; // Retrieves data of the selected Pokemon
  }

}
