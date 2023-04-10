import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NotesService } from "../service/notes.service";

@Component({
    selector : 'add-notes',
    templateUrl : './addNotes.component.html',
    styleUrls :['./addNotes.component.css']
}
)
export class AddNotesComponent implements OnInit{

    heading! :string;
    noteValue! : string
    constructor(private notesService : NotesService,
        private router : Router){}
    ngOnInit(): void {
        console.log('>> ngOnInit(): AddNotesComponent loaded');
        
    }
    getHeader(value:any):void{
        console.log('>> getHeader()');
        this.heading = value.target.value;
        console.log('heading: ' + this.heading);
    }

    getNote(value:any):void{
        console.log('>> getNote()');
        this.noteValue = value.target.value;
        console.log('note: ' + this.noteValue);
    }

    saveNote():void{
        console.log('>> saveNote()');
        let id = this.notesService.getIdForNewNote();
        let noteCreationDate = new Date;
        this.notesService.addNotes({
            id:id,
            heading: this.heading,
            note: this.noteValue,
            date: noteCreationDate
        })
        this.router.navigate(['/']);
        console.log(this.notesService.getNotes());
        
    }
    goBackToMainView():void{
        console.log('>> goBackToMainView');
        this.router.navigate(['/']);
    }
}