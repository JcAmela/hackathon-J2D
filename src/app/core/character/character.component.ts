import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from '../services/characters.service';
import { Character } from './../interfaces/interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input() characters: Character[] = [];
  originalCharacters: Character[] = [];
  searchPerformed: boolean = false;
  userInteracted: boolean = false;

  constructor(private characterService: CharacterService) { }
  isLoading: boolean = true;

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.characterService.getCharacters().subscribe(characters => {
      this.characters = characters;
      this.originalCharacters = [...characters];
      this.isLoading = false;
    }, error => {
      console.error("Error al cargar los personajes:", error);
      this.isLoading = false;
    });
  }


  onCharactersFiltered(data: { characters: Character[], isEmpty: boolean }): void {
    this.characters = data.characters;
    this.searchPerformed = !data.isEmpty;
    this.userInteracted = !data.isEmpty;
  }
}
