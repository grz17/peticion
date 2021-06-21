import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SumanumerosComponent} from './pages/sumanumeros/sumanumeros.component';
import {HolaComponent} from './pages/hola/hola.component';
import { LoginComponent } from './pages/login/login.component';
import{HomeComponent}from'./pages/home/home.component';
import{NuevouserComponent}from'./pages/nuevouser/nuevouser.component'
import{ComplementoComponent} from'./pages/complemento/complemento.component'
const routes: Routes = [
  {
    path: 'hola',
    component: HolaComponent
  },
   {
    path: 'usuario',
    component: NuevouserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sumanumeros',
    component: SumanumerosComponent
  },
   {
    path: 'Home',
    component: HomeComponent
  },
   {
    path: 'juegos',
    component: ComplementoComponent
  },
  {
    path: 'posts',
    loadChildren: () => import('./pages/posts/posts-routing.module').then( m => m.PostsRoutingModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
