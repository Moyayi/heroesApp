import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit{

  constructor(
    private activatedRoute : ActivatedRoute,
    private service : HeroesService
    ){}
  hero !: Heroe;
  foundHero : boolean = true;

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe({
        next: ({id}) => {
          //check if id exist if true ==> hero = data otherwise change foundHero to false
          this.service.getHeroeById(id)
            .subscribe({
              next: (data) => {
                this.hero = data;
                console.table(this.hero)
              },
              error: ( error) => {
                this.foundHero = false
              }
            })
        }
      })
  }
}
