import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from '../heroes/pages/home/home.component';
import { HeroesModule } from '../heroes/heroes.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    HeroesModule
  ]
})
export class AuthModule { }
