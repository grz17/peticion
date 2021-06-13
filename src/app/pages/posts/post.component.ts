import { Component, OnInit } from '@angular/core';
import {DataService} from '../../servicios/data.service';
@Component({
  selector: 'app-posts',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  mensajes:any[]=[];
  constructor( private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPost().subscribe( (post:any)=> {
      console.log(post);
      this.mensajes.push(post);
     
    });
    
  }
 
}
