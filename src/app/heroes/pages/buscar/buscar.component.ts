import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [],
})
export class BuscarComponent implements OnInit {
  termino: string = '';
  heroes: Heroe[] = [];
  constructor(private heroesService: HeroesService, private router: Router) {}

  ngOnInit(): void {
  }

  search() {
    this.heroesService.searchHeroe(this.termino).subscribe((response) => {
      this.heroes = response;
    });
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    const heroe = event.option.value;
    if (heroe) {
      this.router.navigate([heroe.id]);
    }
  }
}
