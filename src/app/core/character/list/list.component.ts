import { Component, OnInit, Input } from '@angular/core';
import { CharacterService } from '../../services/characters.service';
import { Character } from '../../interfaces/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  @Input() characters: Character[] = [];

  constructor(private characterService: CharacterService, private router: Router) {}

  ngOnInit(): void {
    if (!this.characters.length) {
      this.loadCharacters();
    }
  }

  loadCharacters(): void {
    this.characterService.getCharacters().subscribe(characters => {
      this.characters = characters;
    });
  }

  goToDetail(id: number): void {
    this.router.navigate(['/detail', id]);
  }
}
