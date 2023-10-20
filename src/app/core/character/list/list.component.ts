import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/characters.service';
import { Character } from '../../interfaces/interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  characters: Character[] = [];

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.characterService.getCharacters().subscribe(characters => {
      this.characters = characters;
    });
  }

  goToDetail(id: number): void {
    // TODO: Implement navigation to detail.
  }
}
