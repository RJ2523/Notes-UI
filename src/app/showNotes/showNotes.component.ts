import { Component, OnInit } from "@angular/core";
import { Notes } from "../Notes/notes";
import { NotesService } from "../service/notes.service";
@Component({
    selector:'show-notes',
    templateUrl:'showNotes.component.html',
    styleUrls:['showNotes.component.css']

})
export class ShowNotesComponent implements OnInit{
    notes!: Notes[];
    constructor(private notesService: NotesService){}
    ngOnInit(): void {
        console.log('>> Onit: showNotesComponent');
        this.notes = this.notesService.getNotes();
        console.log(this.notes);
    }
    onClick(event: Event) {
        event.stopPropagation();
      }

}