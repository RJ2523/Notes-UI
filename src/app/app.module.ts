import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShowNotesComponent } from './showNotes/showNotes.component';
import { NoteDetailsComponent } from './noteDetails/noteDetails.component';
import { HeaderComponent } from './header/header.component';
import { ViewNotesComponent } from './viewNotes/viewNotes.component';

@NgModule({
  declarations: [
    AppComponent, ShowNotesComponent, NoteDetailsComponent, HeaderComponent, ViewNotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'note', component:NoteDetailsComponent},
      {path: '', redirectTo:'homepage', pathMatch:'full'},
      {path: 'homepage', component: ShowNotesComponent},
      {path:'edit/:id', component:NoteDetailsComponent},
      {path: 'note/:id', component: ViewNotesComponent}
    ],{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
