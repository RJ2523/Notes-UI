import { Injectable, OnInit } from "@angular/core";
import { Notes } from "../Notes/notes";

@Injectable({
    providedIn:'root'
})
export class NotesService implements OnInit{
    ngOnInit(): void {
        console.log('>> Onit : NotesService');     
    }
    notes : Notes[] = [
        {
            id: '1',
            heading: "note1",
            note: `Now is the winter of our discontent
            Made glorious summer by this sun of York;
            And all the clouds that lour'd upon our house
            In the deep bosom of the ocean buried.
            Now are our brows bound with victorious wreaths;
            Our bruised arms hung up for monuments;`,
            date: new Date
        },
        {
            id: '2',
            heading: "note2",
            note: `Our stern alarums changed to merry meetings,
            Our dreadful marches to delightful measures.
            Grim-visaged war hath smooth'd his wrinkled front;
            And now, instead of mounting barded steeds
            To fright the souls of fearful adversaries,
            He capers nimbly in a lady's chamber
            To the lascivious pleasing of a lute.
            But I, that am not shaped for sportive tricks,
            Nor made to court an amorous looking-glass;`,
            date: new Date
        },
        {
            id: '3',
            heading: "note3",
            note:  `And Eurypylus, son of Euaemon, killed Hypsenor, the son of noble Dolopion,
             who had been made priest of the river Scamander, and was honoured among the people 
             as though he were a god. Eurypylus gave him chase as he was flying before him, 
             smote him with his sword upon the arm, and lopped his strong hand from off it. 
             The bloody hand fell to the ground, and the shades of death, with fate that no man can withstand,
              came over his eyes. Thus furiously did the battle rage between them. As for the son of Tydeus,
               you could not say whether he was more among the Achaeans or the Trojans. He rushed across 
               the plain like a winter torrent that has burst its barrier in full flood; no dykes, 
               no walls of fruitful vineyards can embank it when it is swollen with rain from heaven, 
               but in a moment it comes tearing onward, and lays many a field waste that many a strong man
                hand has reclaimed- even so were the dense phalanxes of the Trojans driven in rout by the
                 son of Tydeus, and many though they were, they dared not abide his onslaught.`,
            date: new Date
        },
    ];

    getNotes(): Notes[] {
        return this.notes;
    }

    getIdForNewNote():number{
        return this.notes.length+1;
    }

    getNoteById(id: string): Notes{
        console.log('>> getNoteById');
        let note = this.notes.filter(item=>item.id==id);
        return note[0];
    }
    addNotes(note:Notes):void{
        note.id = (this.notes.length+1).toString();
        note.date = new Date();
        this.notes.push(note);
    }

    updateRecord(note: Notes):void{
        this.notes[Number(note.id)!-1].heading =  note.heading;
        this.notes[Number(note.id)!-1].note = note.note;
    }
}