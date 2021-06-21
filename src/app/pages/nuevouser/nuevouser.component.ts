import { Component, OnInit } from '@angular/core';
import {DataService} from '../../servicios/data.service';
@Component({
  selector: 'app-nuevouser',
  templateUrl: './nuevouser.component.html',
  styleUrls: ['./nuevouser.component.css']
})
export class NuevouserComponent implements OnInit {

  mensajes:any[]=[];
 Usuario: any="";
 nombre: any="";
 password :any=""
  constructor( private dataService: DataService) { }
  ngOnInit(): void {
    this.dataService.getregistro(this.Usuario,this.nombre,this.password).subscribe( (post:any)=> {
     console.log(post);
     console.log(this.nombre ,this.password ,this.Usuario);
     this.mensajes=post.Estatus;
    });
    
  }

}
