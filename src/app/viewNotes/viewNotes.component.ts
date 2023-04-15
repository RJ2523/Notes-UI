import { Component } from "@angular/core";
import { Notes } from "../Notes/notes";
import { ActivatedRoute } from "@angular/router";
import { NotesService } from "../service/notes.service";
import { Location } from "@angular/common";

@Component({
    selector: 'view-notes',
    styleUrls: ['./viewNotes.component.css'],
    templateUrl: './viewNotes.component.html'
})
export class ViewNotesComponent {
    notes: Notes

    constructor(private activatedRoute: ActivatedRoute, private notesService: NotesService, private location: Location) {
        let id = activatedRoute.snapshot.paramMap.get('id');
        this.notes = notesService.getNoteById(id!);
    }

    goBack() {
        this.location.back();
    }
}