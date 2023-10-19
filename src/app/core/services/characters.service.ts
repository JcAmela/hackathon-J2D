import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { APIResponse, Character } from '../interfaces/interface';
import { map } from 'rxjs/operators';

/**
 * Servicio para interactuar con la API de Rick and Morty y obtener datos de personajes.
 */
@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  /**
   * Base URL de la API de Rick and Morty.
   */
  private BASE_URL = 'https://rickandmortyapi.com/api';

  /**
   * Lista de nombres de personajes principales a recuperar desde la API.
   */
  private mainCharacters = [
    'Rick Sanchez', 'Morty Smith', 'Summer Smith', 'Beth Smith', 'Jerry Smith',
    'Birdperson', 'Mr. Meeseeks', 'Dr. Wong', 'Jessica', 'Principal Vagina',
    'Goldenfold', 'Squanchy', 'Mr. Poopybutthole', 'Evil Morty', 'Scary Terry',
    'Unity', 'Tammy Gueterman', 'Sleepy Gary', 'Snuffles', 'Abradolf Lincler'
  ];

  /**
   * Constructor que inyecta el cliente HTTP.
   * @param http - Cliente HTTP para realizar solicitudes a la API.
   */
  constructor(private http: HttpClient) {}

  /**
   * Método que obtiene una lista de personajes basada en mainCharacters desde la API.
   * @returns Observable<Character[]> - Un observable que emite un arreglo de personajes.
   */
  getCharacters(): Observable<Character[]> {
    const requests: Observable<APIResponse<Character>>[] = this.mainCharacters.map(character => 
      this.http.get<APIResponse<Character>>(`${this.BASE_URL}/character?name=${character}`)
    );
  
    return forkJoin(requests).pipe(
      map((responses: APIResponse<Character>[]) => {
        const characters: Character[] = [];
        responses.forEach((response, index) => {
          // Usamos "index" para acceder al nombre del personaje actual desde "mainCharacters"
          const currentCharacterName = this.mainCharacters[index];
  
          // Encuentra el primer personaje que coincide exactamente con el nombre buscado
          const exactMatch = response.results.find(c => c.name === currentCharacterName);
          if (exactMatch) {
            characters.push(exactMatch);
          } else if (response.results.length > 0) {
            // Si no hay coincidencia exacta, toma el primer resultado
            characters.push(response.results[0]);
          }
        });
        return characters;
      })
    );
  
  }
  
  


  
}
