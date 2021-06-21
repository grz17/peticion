import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { SumanumerosComponent } from '../pages/sumanumeros/sumanumeros.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  
  getPost(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
   getjuegos(){
    return this.http.get('https://hostcjcafe.azurewebsites.net/Servicios/Hola.php');
  }

  getSuma(num1: number, num2: number):
  Observable<number>
  {
    let  headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this.http.post<number>('https://hostcjcafe.azurewebsites.net/Servicios/Suma.php?',"num1="+num1+"&num2="+num2,{headers: headers});
  }
  getlogin(correo: any):
  Observable<any>
  {
    let  headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this.http.post<any>('https://hostcjcafe.azurewebsites.net/Login/index.php?controller=Usuarios&action=buscar',"correo="+correo,{headers: headers});
  }
  getregistro(correo: any, nombre:any,contrasena:any):
  Observable<any>
  {
    let  headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this.http.post<any>('https://hostcjcafe.azurewebsites.net/Login/index.php?controller=Usuarios&action=insertar',"&correo="+correo+"&nombre="+nombre+"&contrasena="+contrasena,{headers: headers});
  }
}
