import { Component } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  heroe : Heroe = {
    superhero : '',
    alter_ego : '',
    characters : '',
    first_appearance : '',
    publisher : Publisher.DCComics,
    alt_img : ''
  }
  publisher =[
    {
      id : 'DC Comics',
      desc : 'DC - Comics'
    },
    {
      id : 'Marvel Comics',
      desc : 'Marvel - Comics'
    } 
  ] 
}
