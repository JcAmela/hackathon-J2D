import { Component, OnInit } from '@angular/core';
import { CharacterService } from './../services/characters.service';
import { Character } from './../interfaces/interface';

/**
 * Componente que lista los personajes.
 */
@Component({
  selector: 'app-character-list',
  templateUrl: './characterList.component.html',
  styleUrls: ['./characterList.component.css']
})
export class CharacterListComponent implements OnInit {

  /**
   * Array para almacenar los personajes recuperados.
   */
  characters: Character[] = [];

  /**
   * Constructor que inyecta el servicio de personajes.
   * @param characterService - Servicio para obtener datos de personajes.
   */
  constructor(private characterService: CharacterService) {}

  /**
   * Método de ciclo de vida que se ejecuta después de que se crea el componente.
   */
  ngOnInit(): void {
    this.loadCharacters();
  }

  /**
   * Método para cargar los personajes iniciales.
   */
  loadCharacters(): void {
    this.characterService.getCharacters().subscribe((characters: Character[]) => {
      this.characters = characters;
    });
  }

  /**
   * Método para navegar al detalle del personaje seleccionado.
   * @param id - ID del personaje seleccionado.
   */
  goToDetail(id: number): void {
    // TODO: Implementa la lógica para navegar al detalle del personaje seleccionado.
  }
}
