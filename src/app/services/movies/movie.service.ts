import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { formatDate, DatePipe } from '@angular/common';
import {Movie} from "../../components/nuevasPeliculas/pelicula"

@Injectable()
export class MoviesService {
  /*  private httpHeaders = new HttpHeaders(); */
  private urlEndPoint:string = 'http://localhost:8090/softelix/';
  private httpHeaders = new HttpHeaders();
  constructor(private http: HttpClient, private router: Router) { }

  getPeliculas(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.urlEndPoint);
   
  }

  getPeliculasByTitle(title:string):Observable<Movie>{
    return this.http.get<Movie>(`${this.urlEndPoint} +'/movie/title/'+ ${title}`);
  }
}
