import { Component } from '@angular/core';

interface Personaje{
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent  {

  personajes: Personaje [] = [{
    nombre: 'Gohan',
    poder: 1500
  }, {
    nombre: 'Vegeta',
    poder: 1000
  }];

  nuevo:Personaje = {
    nombre: '',
    poder: 0
  }

  agregar(){
    if (this.nuevo.nombre.trim().length === 0){
      return;
    }

    console.log( this.nuevo );

    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder:0
    }
  }

}
