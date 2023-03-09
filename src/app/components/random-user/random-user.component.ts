import { Component, OnInit, Input } from '@angular/core';
import { IRandomContact, Results } from 'src/app/models/randomuser';
import { NavigationExtras, Router } from '@angular/router';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.scss']
})
export class RandomUserComponent implements OnInit{

  @Input() randomContact: IRandomContact | undefined;


constructor(private router: Router){}

ngOnInit(): void {
  
}

elejirAmigo(contacto: IRandomContact){
  let navigationExtra: NavigationExtras={
    state:{
      data:contacto
    }
  }
  this.router.navigate(['/dashboard/home'], navigationExtra);
}

volverInicio(){
  this.router.navigate(['/dashboard/home']);
}
}
