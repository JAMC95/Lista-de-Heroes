import {Component, View} from "angular2/core";

@Component({
    selector: "heroes",
    properties: ["items"]
})

@View({
    template: `
    <ul class="list-group">
        <li class="list-group-item" *ngFor="#hero of items #i=index">
            {{i+1}}.- {{hero}}
        <span class="btn btn-xs btn-danger" (click)="remove(i)">Eliminar héroe</span>
        </li>
    </ul>
`
})

export class Hero {
    items: Array<string>;

    constructor(){

    }

    remove(i) {
        this.items.splice(i,1);
    }
}