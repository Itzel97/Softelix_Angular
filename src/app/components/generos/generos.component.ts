import {Component} from "@angular/core";
import {Movie} from "../nuevasPeliculas/pelicula";
import {MoviesService} from "../../services/movies/movie.service";
@Component({
    selector:"app-gener",
    templateUrl:"./generos.component.html",
    styleUrls:["./generos.component.css"]
})

export class GeneroComponent{
    private title:string ="Action";
    peliculas:Movie[];

    constructor(private _MoviesService: MoviesService) {
    }
    ngOnInit() {
        this._MoviesService.getPeliculas().subscribe(
            pelicula => {
                this.peliculas = pelicula;
                console.log("juegos", pelicula);
    },
    error => {
        console.log(error);
    }
    ); 

}
}
