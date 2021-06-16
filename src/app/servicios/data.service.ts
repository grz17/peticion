import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SumanumerosComponent } from '../pages/sumanumeros/sumanumeros.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  
  getPost(){
    return this.http.get('https://hostcjcafe.azurewebsites.net/Servicios/Hola.php');
  }

  getSuma(numero1:number,numero: number)
  {
  
    return this.http.get('https://hostcjcafe.azurewebsites.net/Servicios/Suma.php?num1='+numero+'&num2='+numero1+'');
  }
}
