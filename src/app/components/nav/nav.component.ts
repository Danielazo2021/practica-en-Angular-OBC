import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
identificado:boolean=false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}
  ngOnInit(): void {
    if(sessionStorage.getItem('token'))
    {
      this.identificado=true;
    }else{
      this.identificado=false;
    }
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
    this.router.navigate(['login'])
    
  }
}
