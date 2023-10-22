import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Character } from '../../interfaces/interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  // Variables para los filtros y búsquedas
  searchTerm: string = '';
  statusFilter: string = '';
  speciesFilter: string = '';
  typeFilter: string = '';
  genderFilter: string = '';

  @Input() characters: Character[] = [];  // Esta línea es la clave para la solución
  @Output() filtered = new EventEmitter<Character[]>();

  // Método para filtrar los personajes
  filterCharacters(): void {
    const filteredCharacters = this.characters.filter(character => {
      return (!this.searchTerm || character.name.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
             (!this.statusFilter || character.status === this.statusFilter) &&
             (!this.speciesFilter || character.species.includes(this.speciesFilter)) &&
             (!this.typeFilter || character.type.includes(this.typeFilter)) &&
             (!this.genderFilter || character.gender === this.genderFilter);
    });

    // Emite los personajes filtrados para que el componente padre los use
    this.filtered.emit(filteredCharacters);
  }
}
