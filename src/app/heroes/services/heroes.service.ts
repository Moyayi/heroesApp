import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';
import {Observable} from 'rxjs'
import { environments } from 'src/environments/environments';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http : HttpClient) { }
  private endPointApi : string = environments.endPointApi;
  private _limit : number = 6;
  getHeroes() : Observable<Heroe[]> { 
    return this.http.get<Heroe[]>(`${this.endPointApi}/heroes`)
  }

  getHeroeById(id : string) : Observable<Heroe> {
    return this.http.get<Heroe>(`http://localhost:3000/heroes/${id}`);
  }
  
  getSugerencias ( termino : string ) : Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.endPointApi}/heroes?q=${termino}&_limit=${this._limit}`);
  }

  agregarHeroe( heroe: Heroe ) : Observable<Heroe>{
    return this.http.post<Heroe>(`${this.endPointApi}/heroes`, heroe)
  }

  editarHeroe( heroe : Heroe): Observable<Heroe>{
    return this.http.put<Heroe>(`${this.endPointApi}/heroes`,heroe)
  }
}
