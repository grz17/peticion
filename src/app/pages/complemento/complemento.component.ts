import { Component, OnInit } from '@angular/core';
import {DataService} from '../../servicios/data.service';
@Component({
  selector: 'app-complemento',
  templateUrl: './complemento.component.html',
  styleUrls: ['./complemento.component.css']
})
export class ComplementoComponent implements OnInit {

    mensajes:any[]=[];
  constructor( private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPost().subscribe( (post:any)=> {
      console.log(post);
      this.mensajes=post;
     
    });
    
  }
}
