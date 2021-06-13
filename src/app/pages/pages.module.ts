import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HolaComponent } from './hola/hola.component';
import { SumanumerosComponent } from './sumanumeros/sumanumeros.component';
import{PostComponent} from './posts/post.component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
  
  ],
  declarations: [
    HolaComponent,
    SumanumerosComponent,
    PostComponent
  ],
  exports: [
    HolaComponent,
    SumanumerosComponent,
    PostComponent
  ]

})
export class PagesModule { }
