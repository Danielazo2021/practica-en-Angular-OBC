import { Component , OnInit} from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';
import { IRandomContact } from 'src/app/models/randomuser';
import { ContactService } from 'src/app/services/contact.service';
import { RandomUserService } from 'src/app/services/random-user.service';
import { Results } from 'src/app/models/randomuser';


@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})


export class ContactsPageComponent implements OnInit {
listaContacto: any;
filtroSexo: string | undefined='todos';
listaRandomContacts:  IRandomContact[]=[]; // ver si es randomuser o result
cantidadAleatorios:number=10;
loading:boolean= true;
 // sexoParam:string="";
constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService, private randomUserService: RandomUserService){}

ngOnInit(): void {

//obtenermos los query params
this.route.queryParams.subscribe((params:any)=>{
  if(params.sexo){ 
  this.filtroSexo= params.sexo;
  console.log("QueryParams: ", params.sexo);
  } 
  });
    // Implementacion para la lista de contactos aleatoria

    this.randomUserService.obtenerRandomContacts(this.cantidadAleatorios).subscribe(
      {
        next:(response: Results) => {
          console.table(response); 
          response.results.forEach((randomContact:IRandomContact, index: number)=>{

            this.listaRandomContacts.push(randomContact)
           
          })
         
        },
        error: (error)=> console.error(`ha ocurrido un error: ${error}`) ,
        complete: ()=>  {console.table(this.listaRandomContacts),
          this.loading= false;
        } //console.info('Peticion de contacto random terminada')
        
      });

  //obtener la lista
 // this.listaContacto= this.contactService.obtenerContactos();

 /* this.contactService.obtenerContactos(this.filtroSexo)
        .then(
          (lista)=> this.listaContacto= lista)
        .catch(
          (error)=> console.error('ha ocurrido un error al obtener los datos', error))
        .finally(
          ()=> console.log("Peticion de contactos resuelta"))

          console.log("ahora filtro contiene: ",this.filtroSexo);*/
        
}


//ejemplo de paso de informacion entre componentes a traves del estado
VolverAHome(contacto: IRandomContact){
  let navigationExtra: NavigationExtras={
       state: {
          data: contacto   
          }
      }
      this.router.navigate(['/dashboard/home'], navigationExtra);
    }
    IrAHome(){
      this.router.navigate(['/dashboard/home']);
    }
}

