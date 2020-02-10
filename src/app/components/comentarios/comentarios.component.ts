import {Component, OnInit} from "@angular/core";
import {Comentario} from "./comentario";

@Component({
    selector:"app-comments",
    templateUrl:"./comentario.component.html"
})

export class ComentariosComponent implements OnInit{
    public comentario:Comentario;
    public nuevosComentarios:Array<any>;
    public dia = Date;
    constructor(){
        this.comentario = new Comentario ("","", new Date)

        this.nuevosComentarios=[
            new Comentario("Prueba1"," Este es un comentario", new Date),
            
        ]

    }
    ngOnInit() {}

    onSubmit(First:string,Second:string){
        this.nuevosComentarios.push(this.comentario)
        console.log(this.nuevosComentarios)

    }
}