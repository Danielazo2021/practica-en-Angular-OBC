import { Component, OnInit } from '@angular/core';
import { IRandomContact, Results } from 'src/app/models/randomuser';

import { RandomUserService } from 'src/app/services/random-user.service';


@Component({
  selector: 'app-random-contact-page',
  templateUrl: './random-contact-page.component.html',
  styleUrls: ['./random-contact-page.component.scss']
})
export class RandomContactPageComponent implements OnInit {
  contact: IRandomContact | undefined;
  cantidad:number=0;

  constructor(private randomUserService: RandomUserService){}
ngOnInit(): void {
  this.randomUserService.obtenerRandomContact().subscribe(
    {
      next:(response: Results)=>{
        this.contact= response.results[0];
      },
      error: (error)=> console.error(`ha ocurrido un error: ${error}`) ,
      complete: ()=> console.info('Peticion de contacto random terminada')

    });  
}

obtenerNuevoContacto(){  
  this.randomUserService.obtenerRandomContact().subscribe(
    {
      next:(response: Results)=>{
        this.contact= response.results[0];
      },
      error: (error)=> console.error(`ha ocurrido un error: ${error}`) ,
      complete: ()=> console.info('Peticion de contacto random terminada')
    });
  }

  obtenerListaContactos(n: number){
    this.randomUserService.obtenerRandomContacts(n).subscribe(
      {
        next:(response: Results)=>{
          console.table(response);
          //this.contact= response.results[0];
        },
        error: (error)=> console.error(`ha ocurrido un error: ${error}`) ,
        complete: ()=> alert(`Peticion de contacto random terminada, los  ${n} resultados  se muestran por consola`)
      });
  }



}
