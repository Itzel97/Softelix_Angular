import {Component,OnInit} from "@angular/core";
import {MoviesService} from "../../services/movies/movie.service";
import {Movie} from "./pelicula";
    @Component({
    selector:"app-newpelis",
    templateUrl:"./nuevasPeliculas.component.html",
    styleUrls:["./nuevasPeliculas.component.css"]
})

export class NuevasPeliculasComponent implements OnInit{
    peliculas:Movie[];

    constructor(private _MoviesService: MoviesService) {
    }

    ngOnInit() {
        this._MoviesService.getPeliculas().subscribe(
            pelicula => {
                this.peliculas = pelicula;
                console.log("Peliculas: ", this.peliculas);
    },
    error => {
        console.log(error);
    }
    ); 
    
}
}
  /*  ngOnInit() {
    this._MoviesService.getPeliculas.subscribe(
      data => {
        this.peliculas = data["results"];
        console.log("DATA: ", data);
        console.log("NuevasPeliculasComponentComponent: ", this.peliculas);
      },
      error => {
        console.log(error);
      }
    );  
  } */
  /*  constructor(){
       this.peliculas= [
           new Pelicula (this.pic,"Movie Name", 2020, "#","Action"),
           new Pelicula (this.pic,"Movie Name", 2020, "#","Action"),
           new Pelicula (this.pic,"Movie Name", 2020, "#","Action"),
           new Pelicula (this.pic,"Movie Name", 2020, "#","Action"),
           new Pelicula (this.pic,"Movie Name", 2020, "#","Action"),
           new Pelicula (this.pic,"Movie Name", 2020, "#","Action"),
           new Pelicula (this.pic,"Movie Name", 2020, "#","Action"),
           new Pelicula (this.pic,"Movie Name", 2020, "#","Action")
       ]
   }
  */
