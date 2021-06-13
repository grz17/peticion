import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rutas = [
    {
      name: 'hola',
      path: '/hola'
    },
    {
      name: 'sumanumeros',
      path: '/sumanumeros'
    },
    {
      name: 'posts',
      path: '/posts'
    }
   
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
