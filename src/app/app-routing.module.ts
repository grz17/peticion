import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SumanumerosComponent} from './pages/sumanumeros/sumanumeros.component';
import {HolaComponent} from './pages/hola/hola.component';

const routes: Routes = [
  {
    path: 'hola',
    component: HolaComponent
  },
  {
    path: 'sumanumeros',
    component: SumanumerosComponent
  },
  {
    path: 'posts',
    loadChildren: () => import('./pages/posts/posts-routing.module').then( m => m.PostsRoutingModule)
  },
  {
    path: '**',
    redirectTo: 'hola'
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
