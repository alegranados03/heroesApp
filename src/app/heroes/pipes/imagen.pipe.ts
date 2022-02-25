import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  transform(heroe: Heroe): string {
    if (heroe) {
      return `assets/heroes/${heroe.id}.jpg`;
    }
    return '';
  }
}
