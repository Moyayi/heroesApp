import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(hero: Heroe): String {
    
    let imagen = "assets/no-image.png"

    if(hero.alt_img !== undefined){
      imagen = hero.alt_img;
    }else if(hero.id !== undefined){
      imagen = `assets/heroes/${hero.id}.jpg`;
    }

    return imagen;
    // return (hero.id !== undefined) 
    //   ? `assets/heroes/${hero.id}.jpg`
    //   : `assets/no-image.png`
  }

}
