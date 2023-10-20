import { Component, OnInit } from '@angular/core';
import { CharacterService } from './../services/characters.service';
import { Character } from './../interfaces/interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  // List of characters.
  characters: Character[] = [];

  // Injects the character service.
  constructor(private characterService: CharacterService) {}

  // Initial loading of characters.
  ngOnInit(): void {
    this.loadCharacters();
  }

  // Fetches characters from the service.
  loadCharacters(): void {
    this.characterService.getCharacters().subscribe((characters: Character[]) => {
      this.characters = characters;
    });
  }

  // Navigates to character detail.
  goToDetail(id: number): void {
    // TODO: Implement navigation to detail.
  }

}