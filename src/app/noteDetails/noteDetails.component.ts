import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Notes } from "../Notes/notes";
import { NotesService } from "../service/notes.service";

@Component({
    selector:'note-details',
    templateUrl: 'noteDetails.component.html',
    styleUrls:['noteDetails.component.css']

})
export class NoteDetailsComponent implements OnInit{
    constructor(
        private activatedRoute: ActivatedRoute,
        private notesService : NotesService,
        private router : Router
        ){}
    note! : Notes
    heading!: string;
    noteValue!: string;
    ngOnInit(): void {
        console.log('>> OnIt: NoteDetailsComponent');
        let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        this.note = this.notesService.getNoteById(id);
        console.log(this.note);
        this.heading = this.note.heading;
        this.noteValue = this.note.note;
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
        this.note.heading = this.heading;
        this.note.note = this.noteValue;
        this.notesService.updateRecord(this.note);
        this.router.navigate(['/'])
    }
    goBackToMainView():void{
        console.log('>> goBackToMainView');
        this.router.navigate(['/']);
    }
}