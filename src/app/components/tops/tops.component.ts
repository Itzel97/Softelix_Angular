import {Component, Input} from "@angular/core";
import {MoviesService} from "../../services/movies/movie.service";
import {Movie} from "../nuevasPeliculas/pelicula"
@Component({
    selector:"app-top",
    templateUrl:"./tops.component.html",
    styleUrls:["./tops.component.css"]
})

export class TopComponent{
    @Input()titulo :string ="Tops";
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

