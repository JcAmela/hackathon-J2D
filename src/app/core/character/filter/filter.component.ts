import { CharactersService } from './../../services/search.service';
import { Component, EventEmitter, Output, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Character } from '../../interfaces/interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements AfterViewInit {
  searchTerm: string = '';
  statusFilter: string = '';
  speciesFilter: string = '';
  typeFilter: string = '';
  genderFilter: string = '';

  @Input() characters: Character[] = [];
  @Output() filtered = new EventEmitter<{ characters: Character[], isEmpty: boolean, userInteracted: boolean }>();

  @ViewChild('searchInputElement', { static: false }) searchInput!: ElementRef;

  constructor(private CharactersService: CharactersService) {}

  ngAfterViewInit(): void {
    this.searchInput.nativeElement.focus();
  }

  filterCharactersFromAPI(): void {
    const filters = {
      name: this.searchTerm,
      status: this.statusFilter,
      species: this.speciesFilter,
      type: this.typeFilter,
      gender: this.genderFilter
    };

    const userInteracted = !!this.searchTerm || !!this.statusFilter || !!this.speciesFilter || !!this.typeFilter || !!this.genderFilter;

    this.CharactersService.getCharactersByFilter(filters).subscribe(response => {
      this.filtered.emit({
        characters: response.results,
        isEmpty: response.results.length === 0,
        userInteracted: userInteracted
      });
    }, error => {
      console.error('Error al obtener personajes:', error);
    });
  }



}
