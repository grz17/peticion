import { Component, OnInit } from '@angular/core';
import {DataService} from '../../servicios/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mensajes:any[]=[];
 Usuario: any="";
  constructor( private dataService: DataService) { }
  ngOnInit(): void {
    this.dataService.getlogin(this.Usuario).subscribe( (post:any=[1])=> {
     console.log(post);
     console.log(this.Usuario);
     this.mensajes=post.Estatus;
     if(post.Estatus==true)
     {
       document.location.href="../Home";
     }
     else{

       alert("Usuario O Contraseña Erroneo");
     }
    });
    
  }

}
 