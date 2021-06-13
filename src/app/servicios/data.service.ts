import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  
  getPost(){
    return this.http.get('https://hostcjcafe.azurewebsites.net/Servicios/Hola.php');
  }
}
