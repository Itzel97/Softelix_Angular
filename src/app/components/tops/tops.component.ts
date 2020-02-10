import {Component, Input} from "@angular/core"

@Component({
    selector:"app-top",
    templateUrl:"./tops.component.html",
    styleUrls:["./tops.component.css"]
})

export class TopComponent{
    @Input()titulo :string ="Tops";
}    

