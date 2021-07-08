import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



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


  nuevo: Personaje =  {
    nombre:'Maestro Rochi',
    poder: 1000
  }

  addNewActor(arg: Personaje){
    this.personajes.push( arg );
  }
  
  }


