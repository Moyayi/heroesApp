import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit{
  
  constructor( 
    private service : HeroesService,
    private activatedRoute : ActivatedRoute,  
    private router : Router,
    private snackBar : MatSnackBar
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id})  => this.service.getHeroeById(id))
      )
      .subscribe( heroe => this.heroe = heroe)
  }

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


  ActualizarCambios():void{
    this.service.actualizarHeroe(this.heroe)
      .subscribe( heroe => this.mostrarSnackBar("Se ha actualizado el heroe"))
  }
  BorrarHeroe(){
    this.service.borrarHeroe(this.heroe.id!)
      .subscribe(resp => {
        this.router.navigate(['/heroes'])
      })
  }


  mostrarSnackBar( mensaje : string) { 
    this.snackBar.open( mensaje , 'Cerrar', {
      duration: 2500,
      
    })
  }
}
