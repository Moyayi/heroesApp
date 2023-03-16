import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  constructor(
      private service : HeroesService,
      private router : Router,

    ){}

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

  GuardarDatos() : void{
    if(this.heroe.superhero.trim().length === 0){
      return ;
    }
    this.service.agregarHeroe(this.heroe)
      .subscribe( resp => {
        this.router.navigate(['/heroes/', resp.id])
      })
  }


}
