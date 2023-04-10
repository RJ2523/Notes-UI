import { Component } from "@angular/core";

@Component({
    selector:'notes-header',
    templateUrl:'header.component.html',
    styleUrls:['header.component.css']
})
export class HeaderComponent{
    title:string = 'Notes!!'

}