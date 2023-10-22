import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  // Base URL for the Rick and Morty API
  private readonly baseUrl = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) { }

  // Función para obtener personajes basados en filtros
  getCharactersByFilter(filters: any): Observable<any> {
    let filterUrl = this.baseUrl + '?';
    for (const key in filters) {
      if (filters[key]) {
        filterUrl += `${key}=${filters[key]}&`;
      }
    }
    return this.http.get(filterUrl);
  }
}
