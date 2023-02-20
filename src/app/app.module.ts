import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { HeroesRoutingModule } from './heroes/heroes-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HeroesRoutingModule ,
    MaterialModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
