import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-proyecto';
  
  promedio: any;
  sumaTotal: any;
  edadUno: any;
  edadDos: any;

  calcular(){
    this.promedio = (parseInt(this.edadUno) + parseInt(this.edadDos) )/ 2;
    this.sumaTotal = parseInt(this.edadUno) + parseInt(this.edadDos)
  }

  limpiar(){
    this.promedio = null;
    this.sumaTotal = null;
    this.edadUno = null;
    this.edadDos = null;
  }
}
