import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchIdService } from '../services/search-id.service';
import { Character } from '../interfaces/interface';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  character!: Character;
  relatedCharacters: Character[] = [];

  constructor(
    private searchIdService: SearchIdService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);

    this.searchIdService.getCharacterById(id).subscribe(
      (data: Character) => {
        this.character = data;
        this.searchRelatedCharacters(this.character.name);
      },
      (error: any) => console.error('Error al obtener el personaje:', error)
    );
  }

  searchRelatedCharacters(name: string): void {
    this.searchIdService.getCharactersByName(name).subscribe(
      (characters: Character[]) => {
        if (Array.isArray(characters)) {
          this.relatedCharacters = characters.filter(char => char.id !== this.character.id);
        } else {
          console.warn('Se esperaba un array pero se recibió:', characters);
        }
      },
      (error: any) => console.error('Error al obtener personajes relacionados:', error)
    );
  }

  goBackToCharacterComponent() {
    this.router.navigate(['/characterComponent']);
  }

}
