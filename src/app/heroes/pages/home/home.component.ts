import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/interfaces/auth.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _auth : Auth | undefined;
  logged : boolean = false;


  get auth () {
    return this.authService.auth;
  }

  constructor( 
    private router : Router,
    private authService : AuthService
  ){}
  ngOnInit() : void{
    if( !localStorage.getItem("token")){
      this.logged = true;
    }
  }

  logout():void{
    localStorage.removeItem('token')
    this.router.navigate(['./auth'])
  }

  login() : void { 
    this.router.navigate(['/auth/login'])
  }
}
