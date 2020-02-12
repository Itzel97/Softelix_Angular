import {Component, OnInit} from "@angular/core";
import {Comentario} from "./comentario";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
    selector:"app-comments",
    templateUrl:"./comentario.component.html"
})

export class ComentariosComponent implements OnInit{
    public comentario:Comentario;
    public nuevosComentarios:Array<any>;
    constructor(){
        this.comentario = new Comentario ("","", new Date)
        this.nuevosComentarios =[ this.comentario ]

    }

    ngOnInit() {}

    onSubmit(First:string,Second:string){
        this.nuevosComentarios.push( this.comentario)
        return this.nuevosComentarios
        console.log(this.nuevosComentarios)

    }
}