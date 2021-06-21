import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HolaComponent } from './hola/hola.component';
import { SumanumerosComponent } from './sumanumeros/sumanumeros.component';
import{PostComponent} from './posts/post.component';
import { LoginComponent } from './login/login.component';
import { NuevouserComponent } from './nuevouser/nuevouser.component';
import { ComplementoComponent } from './complemento/complemento.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
  
  ],
  declarations: [
    HolaComponent,
    SumanumerosComponent,
    PostComponent,
    LoginComponent,
    NuevouserComponent,
    ComplementoComponent
  ],
  exports: [
    HolaComponent,
    SumanumerosComponent,
    PostComponent
  ]

})
export class PagesModule { }
