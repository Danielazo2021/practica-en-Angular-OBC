import { Component, OnInit } from '@angular/core';
import { IContacto } from 'src/app/models/contact.interface';
import { ActivatedRoute , Router} from '@angular/router';
import { NombreCompletoPipe } from 'src/app/pipes/nombre-completo.pipe';
import { IRandomContact } from 'src/app/models/randomuser';
@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class ContactDetailPageComponent implements OnInit {
id:any | undefined;
contacto:IRandomContact | undefined; 
filtroPrevio:string ="todos";

  constructor(private route: ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    // vamos a leer los parametros
    this.route.params.subscribe(
      (params: any)=>{
        if(params.id){
          console.log(params);
        this.id= params.id;       
      }
     }
    );


    // leemos de state los datos del contacto
     if(history.state.data)
     {
      this.contacto= history.state.data;
     }

     if(history.state.filtro) //ver
     {
      this.filtroPrevio= history.state.filtro;
     }
    /*
    this.contacto.id=history.state.data.id;
    this.contacto.nombre=history.state.data.nombre;
    this.contacto.apellido=history.state.data.apellido;
    this.contacto.sexo=history.state.data.sexo;
    this.contacto.email=history.state.data.email;
*/
  }

  VolverContactos():void{
    this.router.navigate(['/dashboard/contacts']);
  }
  
  VolverHome():void{
    this.router.navigate(['/dashboard/home']);
  }
}
