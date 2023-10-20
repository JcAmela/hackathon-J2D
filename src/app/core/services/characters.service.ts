import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { APIResponse, Character } from '../interfaces/interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  // Base URL of the API.
  private BASE_URL = 'https://rickandmortyapi.com/api';

  // List of main character names.
  private mainCharacters = [
    'Rick Sanchez', 'Morty Smith', 'Summer Smith', 'Beth Smith', 'Jerry Smith',
    'Birdperson', 'Mr. Meeseeks', 'Dr. Wong', 'Jessica', 'Principal Vagina',
    'Goldenfold', 'Squanchy', 'Mr. Poopybutthole', 'Evil Morty', 'Scary Terry',
    'Unity', 'Tammy Gueterman', 'Sleepy Gary', 'Snuffles', 'Abradolf Lincler'
  ];

  // Injects the HTTP client.
  constructor(private http: HttpClient) {}

  // Fetches a list of characters from the API.
  getCharacters(): Observable<Character[]> {
    // Maps each character name to an HTTP request to search for it in the API.
    const requests: Observable<APIResponse<Character>>[] = this.mainCharacters.map(character =>
      this.http.get<APIResponse<Character>>(`${this.BASE_URL}/character?name=${character}`)
    );

    return forkJoin(requests).pipe(
      map((responses: APIResponse<Character>[]) => {
        const characters: Character[] = [];
        responses.forEach((response, index) => {
          // Retrieves the current character's name based on the index.
          const currentCharacterName = this.mainCharacters[index];

          // Tries to find an exact match for the character in the results.
          const exactMatch = response.results.find(c => c.name === currentCharacterName);
          if (exactMatch) {
            characters.push(exactMatch);
          } else if (response.results.length > 0) {
            // If there's no exact match, takes the first result.
            characters.push(response.results[0]);
          }
        });
        return characters;
      })
    );
  }
}
