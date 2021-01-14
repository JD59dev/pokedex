import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http: HttpClient) { }

  // Retrieves the languages
  /* getLanguage() {
    return this.http.get('https://pokeapi.co/api/v2/language/').toPromise();
  } */
}
