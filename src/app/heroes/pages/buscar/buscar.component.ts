import { Component, Input, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit{

  constructor(private service : HeroesService){}
  heroes !: Heroe[];
  termino : string = ""
  private _lastHeroSearched !: Heroe;
  ngOnInit():void{
    this.service.getHeroes()
      .subscribe({
        next : (data) => {
          this.heroes = data
        }
      })
  }
  buscandoHeroe():void{
    this.service.getSugerencias(this.termino)
      .subscribe(data => this.heroes = data)
  }
  opcionSeleccionada(event : MatAutocompleteSelectedEvent  ) : void {
    const heroe : Heroe = event.option.value;
    this.termino = heroe.superhero;
    
    //TODO fix bug that click in the same hero will return [object Object] instead of the name of the hero
    // if(this._lastHeroSearched !== undefined){
    //   if(this._lastHeroSearched.superhero !== heroe.superhero){
    //     console.log("entra en el segundo if si no el mismo heroe")
    //     this._lastHeroSearched = heroe;
    //     this.termino = heroe.superhero;
    //   }else{
    //     this.termino = "";
        
    //   }
    // }else{
    //   console.log("entra en else de que es undefined la variable lastHeroSearched")
    //   this._lastHeroSearched = heroe;
    //   this.termino = heroe.superhero;

    // }
  }
}
