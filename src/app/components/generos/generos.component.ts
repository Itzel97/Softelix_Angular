import {Component} from "@angular/core";
import {Pelicula} from "../nuevasPeliculas/pelicula";
@Component({
    selector:"app-gener",
    templateUrl:"./generos.component.html",
    styleUrls:["./generos.component.css"]
})

export class GeneroComponent{
    private title:string ="Action";
    private pelicula:Pelicula;
    private peliculas=[];

    private pic:string = "https://s3.amazonaws.com/statics3.cinemex.com/movie_posters/Xd7LrI6U2ffkIVi-360x540.jpg";

    constructor(){
        this.peliculas= [
            new Pelicula (this.pic,"Movie Name", 2020, "#","Action"),

            new Pelicula ("https://vignette.wikia.nocookie.net/batman/images/7/77/BOP_poster_05.png/revision/latest?cb=20191206190029&path-prefix=es","Movie Name", 2020, "#","Action"),

            new Pelicula ("https://i1.wp.com/plexmx.info/wp-content/uploads/2019/12/black_widow_ver2_xxlg.jpg?ssl=1","Movie Name", 2020, "#","Action"),

            new Pelicula ("https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/04/mulan.jpg?itok=Gj3_PYSN","Movie Name", 2020, "#","Action"),

            new Pelicula ("https://i1.wp.com/plexmx.info/wp-content/uploads/2019/11/EJKlA_RVAAEo91x.jpg-large.jpg?ssl=1","Movie Name", 2020, "#","Action"),

            new Pelicula ("https://i2.wp.com/plexmx.info/wp-content/uploads/2020/01/bloodshot_xlg.jpg?resize=584%2C730&ssl=1","Movie Name", 2020, "#","Action"),

            new Pelicula ("https://poster.ninja/wp-content/uploads/2019/10/The-Gentlemen-2020-Movie-5-scaled.jpg","Movie Name", 2020, "#","Action"),

        ]
    }

}
