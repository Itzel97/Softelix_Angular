import {Component, ɵisListLikeIterable} from "@angular/core"

@Component({
    selector:"app-like",
    templateUrl:"./like.component.html",
    styleUrls:["./like.component.css"]
})

export class LikeComponent{

    private numberOfLikes: number = 0;

    likeButtonClick(){
        this.numberOfLikes++;
    }

    dislikeButtonClick(){
        this.numberOfLikes--;

    }
}