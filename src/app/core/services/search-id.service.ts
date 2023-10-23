import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class SearchIdService {

  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  getCharacterById(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/character/${id}`);
  }
  getCharactersByName(name: string): Observable<Character[]> {
    const encodedName = encodeURIComponent(name);
    return this.http.get<Character[]>(`${this.apiUrl}/character/?name=${encodedName}`);
}


}
