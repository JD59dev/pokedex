import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PkmnService {

  constructor(private http: HttpClient) { }

  getNationalDex() {
    return this.http.get('https://pokeapi.co/api/v2/pokedex/1').toPromise();
  }

  getKantoDex() {
    return this.http.get('https://pokeapi.co/api/v2/pokedex/2').toPromise();
  }

  getJohtoDex() {
    return this.http.get('https://pokeapi.co/api/v2/pokedex/7/').toPromise();
  } // Updated Johto PokéDex (Heart Gold/Soul Silver)

  getHoennDex() {
    return this.http.get('https://pokeapi.co/api/v2/pokedex/15/').toPromise();
  } // Updated Hoenn PokéDex (Omega Ruby/Alpha Sapphire)

  getSinnohDex() {
    return this.http.get('https://pokeapi.co/api/v2/pokedex/6/').toPromise();
  } // Updated Sinnoh PokéDex (Platinum Version)

  getUnovaDex() {
    return this.http.get('https://pokeapi.co/api/v2/pokedex/9/').toPromise();
  } // Updated Unova PokéDex (Black 2/White 2)

  getKalosCentralDex() {
    return this.http.get('https://pokeapi.co/api/v2/pokedex/12/').toPromise();
  } // Central part of the Kalos PokéDex

  getKalosCoastalDex() {
    return this.http.get('https://pokeapi.co/api/v2/pokedex/13/').toPromise();
  } // Coastal part of the Kalos PokéDex

  getKalosMountainDex() {
    return this.http.get('https://pokeapi.co/api/v2/pokedex/14/').toPromise();
  } // Mountain part of the Kaloas PokéDex

  getAlolaDex() {
    return this.http.get('https://pokeapi.co/api/v2/pokedex/21/').toPromise();
  } // Updated Alola PokéDex(Ultra Sun/Ultra Moon)

  getGalarMainDex() {
    return this.http.get('https://pokeapi.co/api/v2/pokedex/27').toPromise();
  } // Main part of the Galar PokéDex (Sword/Shield)

  getGalarIsleDex() {
    return this.http.get('https://pokeapi.co/api/v2/pokedex/28').toPromise();
  } // Isle of Armor PokéDex, only available in DLC

  getGalarTundraDex() {
    return this.http.get('https://pokeapi.co/api/v2/pokedex/29').toPromise();
  } // Crown Tundra PokéDex, only available in DLC

  
}
