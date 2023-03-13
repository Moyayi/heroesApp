import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { EditarComponent } from './pages/editar/editar.component';

const rutas : Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path:'listado',
        component: ListadoComponent
      },
      {
        path:'agregar',
        component: AgregarComponent
      },
      {
        path:'editar/:id',
        component: EditarComponent
      },
      {
        path:'buscar',
        component: BuscarComponent
      },
      {
        path:':id',
        component: HeroeComponent
      },
      {
        path:'**',
        redirectTo: 'listado'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  exports:[
    RouterModule
  ],
  imports: [
    RouterModule.forChild(rutas)
  ]
})
export class HeroesRoutingModule { }
