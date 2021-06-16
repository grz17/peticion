import { Component, OnInit } from '@angular/core';
import {DataService} from '../../servicios/data.service';
@Component({
  selector: 'app-sumanumeros',
  templateUrl: './sumanumeros.component.html',
  styleUrls: ['./sumanumeros.component.css']
})
export class SumanumerosComponent implements OnInit {
  mensajes:any[]=[];
  numero: number=0;
  numero1:number=0;
  constructor( private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getSuma(this.numero,this.numero1).subscribe( (post:any)=> {
      this.mensajes=post.valor;
      console.log(post);
    });
    
  }

}
