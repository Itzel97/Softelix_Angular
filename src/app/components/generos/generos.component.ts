import {Component} from "@angular/core";
import {Pelicula} from "../nuevasPeliculas/pelicula"
@Component({
    selector:"app-gener",
    templateUrl:"./generos.component.html",
    styleUrls:["./generos.component.css"]
})

export class GeneroComponent{
    public movie:Pelicula;
    public ListMovies=[];
    public title:string="Action";
    public action:boolean;
    

    constructor(){
        this.ListMovies =[
            new Pelicula ("","",2020,"#","Action");
            

        ]
    }

    if(){
        this.action = true;
    }
}
