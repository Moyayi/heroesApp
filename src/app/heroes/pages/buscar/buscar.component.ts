import { Component, Input, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {

  constructor(private service : HeroesService){}
  heroes !: Heroe[];
  termino : string = ""
  private _lastHeroSearched !: Heroe;
  heroeSeleccionado !: Heroe;
  sinResultados : boolean = false;

  buscandoHeroe():void{
    this.service.getSugerencias(this.termino)
      .subscribe({
        next : (data) => {
          this.heroes = data;
          if(this.heroes.length <= 0){
            this.sinResultados = true;
          }else{
            this.sinResultados = false;
          }
        }
      })

  }
  opcionSeleccionada(event : MatAutocompleteSelectedEvent  ) : void {
    if(event.option.value !== ""){
      const heroe : Heroe = event.option.value;
      this.termino = heroe.superhero;
  
      this.service.getHeroeById(heroe.id!)
        .subscribe(data => this.heroeSeleccionado = data)
    }else{
      this.termino = ""
    }

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
