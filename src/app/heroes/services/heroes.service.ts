import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private http: HttpClient) {}

  getHeroes() {
    return this.http.get<Heroe[]>(`${environment.api}heroes`);
  }

  getHeroe(heroeId: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${environment.api}heroes/${heroeId}`);
  }

  searchHeroe(name: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${environment.api}heroes?q=${name}`);
  }
}
