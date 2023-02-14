import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes : Route[] = [

  {
    path: 'auth',
    loadChildren: 
      () => import('./auth/auth.module')
              .then( m => m.AuthModule)
  },
  {
    path:'heroes',
    loadChildren:
      () => import('./heroes/heroes.module')
              .then(m => m.HeroesModule)
  },
  {
    path : '404',
    component : ErrorPageComponent
  },
  {
    path : '**',
    redirectTo: '404'
  }
]


@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot( routes)
  ]
})
export class AppRoutingModule { }
