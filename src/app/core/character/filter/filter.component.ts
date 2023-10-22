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
  @Output() filtered = new EventEmitter<{ characters: Character[], isEmpty: boolean }>();

  @ViewChild('searchInputElement', { static: false }) searchInput!: ElementRef;

  ngAfterViewInit(): void {
    this.searchInput.nativeElement.focus();
  }

  filterCharacters(): void {
    const filteredCharacters = this.characters.filter(character => {
      return (!this.searchTerm || character.name.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
             (!this.statusFilter || character.status === this.statusFilter) &&
             (!this.speciesFilter || character.species.includes(this.speciesFilter)) &&
             (!this.typeFilter || character.type.includes(this.typeFilter)) &&
             (!this.genderFilter || character.gender === this.genderFilter);
    });

    const isFilterEmpty = !this.searchTerm && !this.statusFilter && !this.speciesFilter && !this.typeFilter && !this.genderFilter;
    this.filtered.emit({ characters: filteredCharacters, isEmpty: isFilterEmpty });
  }
}
