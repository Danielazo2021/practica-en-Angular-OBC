import { Injectable } from '@angular/core';
import { IContacto } from '../models/contact.interface';
import { LISTA_CONTACTOS } from '../mock/contacts.mock';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
listaContacto: IContacto[]=LISTA_CONTACTOS;

  constructor() { }

  obtenerContactos(sexo?:string): Promise<IContacto[]>{
   
      if(sexo == 'hombre' || sexo== 'mujer'){
        let listaFiltrada:IContacto[]= this.listaContacto.filter(
          (contacto)=> contacto.sexo == sexo);
        return Promise.resolve(listaFiltrada);
      }else if(sexo=='todos')
      {
        return Promise.resolve(this.listaContacto);
      }else
      return Promise.reject('filtro no valido')
  }


}
