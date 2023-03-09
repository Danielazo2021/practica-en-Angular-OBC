import { Component , OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { NavigationExtras, Router  } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';
import { IRandomContact } from 'src/app/models/randomuser';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
identificado:boolean=false;
contacto:IRandomContact | undefined;

  constructor( private router: Router){}

  ngOnInit(): void {
    if(sessionStorage.getItem('token'))
    {
      this.identificado=true;
    }else{
      this.identificado=false;
    }
   

    //leemos del estado del historial el contacto que nos pasaron desde clase hijo
    if(history.state.data){
    console.log(history.state.data);
    this.contacto=history.state.data;
    }
  }
  
  irContactosAleatoreos(){
    this.router.navigate(['/dashboard/random']);
  }

  irContactos():void{

    if(!sessionStorage.getItem('token')){
  alert('debe estar logueado para acceder a sus contactos, será diregido a la pagina de login en estos momentos!');
}
  let navigationExtra: NavigationExtras= {
    queryParams:{
      sexo: undefined

    }
  }

   this.router.navigate(['/dashboard/contacts'], navigationExtra);

   
     }

     
cerrarSesion(){
  sessionStorage.removeItem('token');
  {
    if(sessionStorage.getItem('token'))
    {
      this.identificado=true;
    }else{
      this.identificado=false;
    }

  }
  
}
}
