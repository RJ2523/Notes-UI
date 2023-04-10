import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddNotesComponent } from './addNotes/addNotes.component';
import { ShowNotesComponent } from './showNotes/showNotes.component';
import { NoteDetailsComponent } from './noteDetails/noteDetails.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent, ShowNotesComponent, NoteDetailsComponent, HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'new', component:AddNotesComponent},
      {path: '', redirectTo:'homepage', pathMatch:'full'},
      {path: 'homepage', component: ShowNotesComponent},
      {path:'note/:id', component:NoteDetailsComponent}
    ],{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
