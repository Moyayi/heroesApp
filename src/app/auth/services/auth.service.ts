import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Auth } from '../interfaces/auth.interface';
import { Observable, of , map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl : string = environments.endPointApi;
  private _auth   : Auth | undefined;

  get auth() : Auth{
    return { ...this._auth! }
  }

  constructor( 
    private http : HttpClient,
  ) { }

  verificarAutenticacion () :Observable <boolean> {
    if( !localStorage.getItem('token')){
      return of(false)
    }
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        map ( auth => {
          console.log('map', auth)
          return true
        })
      )
  } 

  login(  ){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        tap( auth => this._auth = auth),
        tap( auth => localStorage.setItem('token', auth.id))
      );
  }

  logout(){
    localStorage.removeItem('token')
    this._auth = undefined;
  }
}
