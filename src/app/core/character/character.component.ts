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

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.characterService.getCharacters().subscribe(characters => {
      this.characters = characters;
      this.originalCharacters = [...characters];
    });
  }

  onCharactersFiltered(filteredCharacters: Character[]): void {
    this.characters = filteredCharacters;
  }
}
