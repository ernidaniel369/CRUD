import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComponent } from './components/lista/lista.component';
import {FormularioComponent  } from './components/formulario/formulario.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/juegos',
    pathMatch: 'full'
  },
  {
    path: 'juegos',
    component: ListaComponent
  },
  {
    path: 'juegos/add',
    component: FormularioComponent
  },
  {
    path: 'juegos/edit/:id',
    component: FormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }