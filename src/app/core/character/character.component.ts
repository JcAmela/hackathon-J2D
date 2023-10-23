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
  isLoading: boolean = true;

  constructor(private characterService: CharacterService) { }

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


  onCharactersFiltered(data: { characters: Character[], isEmpty: boolean, userInteracted: boolean }): void {
    if(data.userInteracted) {
      this.characters = data.characters;
      this.userInteracted = true;
    } else {
      this.characters = [...this.originalCharacters];
      this.userInteracted = false;
    }
    this.searchPerformed = !data.isEmpty;
  }




}
