import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { IRandomContact, Results } from '../models/randomuser';
import {Observable , throwError, catchError, retry} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) { }

  handleError(error:HttpErrorResponse){
    if(error.status === 0){
      console.error(`Ha ocurrido un error: ${error.error}`)
    }else{
      console.error(`error en el backend: ${error.status}. el body de la respuesta es: ${error.error}`)
    }
    return throwError(()=> new Error('Error en la peticion de contacto aleatorio')
    );
  }

  obtenerRandomContact(): Observable<Results> {
    return this.http.get<Results>('https://randomuser.me/api').pipe(
      retry(2), // numerode reintento de peticiones
      catchError(this.handleError)//sacamos elerror sialgofalla
    );
  }

  obtenerRandomContacts(n: number): Observable<Results>{
    const options: HttpParams= new HttpParams().set("results", n);


    return this.http.get<Results>('https://randomuser.me/api', {params: options}).pipe(
      retry(2), // numerode reintento de peticiones
      catchError(this.handleError)//sacamos elerror sialgofalla
    );
  }

  obtenerRandomContactsPorGenero(sexo: string): Observable<Results[]>{
    const options: HttpParams= new HttpParams().set("gender",sexo);

    return this.http.get<Results[]>('https://randomuser.me/api', {params: options}).pipe(
      retry(2), // numerode reintento de peticiones
      catchError(this.handleError)//sacamos elerror sialgofalla
     );
  }
  

}
