import {Component} from "angular2/core";

@Component({
    selector: "my-app",
    templateUrl: "./app/components/home/home.html"
})

export class HomePage {
    heroes:Array<string>=[];
    constructor() {

    }
    addHero(herotext){
     if(herotext.value != ""){
         this.heroes.push(herotext.value);
         herotext.value = "";
     }
        console.log(this.heroes);
    }
}