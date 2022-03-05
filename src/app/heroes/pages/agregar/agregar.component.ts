import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [],
})
export class AgregarComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      name: 'DC Comics',
    },
    {
      id: 'Marvel Comics',
      name: 'Marvel Comics',
    },
  ];
  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };
  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap((params) => this.heroesService.getHeroe(params.id)))
      .subscribe((heroe) => {
        this.heroe = heroe;
      });
  }
  save() {
    if (this.heroe.id) {
      this.heroesService
        .editHeroe(this.heroe, this.heroe.id)
        .subscribe((heroe) => {
          this.router.navigate([heroe.id]);
        });
    } else {
      this.heroesService.addHeroe(this.heroe).subscribe((heroe) => {
        this.router.navigate([heroe.id]);
      });
    }
  }
}
