import {Component} from "angular2/core";
import {Hero} from "../hero/hero";
@Component({
    selector: "my-app",
    templateUrl: "./app/components/home/home.html",
    directives: [Hero]

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