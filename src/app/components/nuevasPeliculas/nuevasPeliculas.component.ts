import {Component} from "@angular/core"
import {Pelicula} from "./pelicula"
@Component({
    selector:"app-newpelis",
    templateUrl:"./nuevasPeliculas.component.html",
    styleUrls:["./nuevasPeliculas.component.css"]
})

export class NuevasPeliculasComponent{
    private pelicula:Pelicula;
    private peliculas=[];

    private pic:string = "https://s3.amazonaws.com/statics3.cinemex.com/movie_posters/Xd7LrI6U2ffkIVi-360x540.jpg";

    constructor(){
        this.peliculas= [
            new Pelicula (this.pic,"Movie Name", 2020, "#"),
            new Pelicula (this.pic,"Movie Name", 2020, "#"),
            new Pelicula (this.pic,"Movie Name", 2020, "#"),
            new Pelicula (this.pic,"Movie Name", 2020, "#"),
            new Pelicula (this.pic,"Movie Name", 2020, "#"),
            new Pelicula (this.pic,"Movie Name", 2020, "#"),
            new Pelicula (this.pic,"Movie Name", 2020, "#"),
            new Pelicula (this.pic,"Movie Name", 2020, "#"),
        ]
    }


}