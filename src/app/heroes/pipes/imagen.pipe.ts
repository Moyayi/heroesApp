import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(hero: Heroe): String {
    
    return (hero.id !== undefined) 
      ? `assets/heroes/${hero.id}.jpg`
      : `assets/no-image.png`
  }

}
