import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [],
})
export class BuscarComponent implements OnInit {
  termino: string = '';
  heroes: Observable<Heroe[]> = this.heroesService.getHeroes();
  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}
}
