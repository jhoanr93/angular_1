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

  nuevo:Personaje = {
    nombre: 'Trunks',
    poder: 500
  }

  agregar(){
    console.log(this.nuevo);
  }

}
