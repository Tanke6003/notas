import { Component, OnInit } from '@angular/core';
import { NotesService}       from './notes.service';
import { Events }            from '../events';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
  providers: [NotesService]
})
export class NotesPage implements OnInit {
  notes : Array<any>;
  constructor(private _NotesService: NotesService,
    public events: Events) {
    this.showNotes();
    this.events.noteChange.subscribe(()=>{
      this.showNotes();
    });  
   }

  ngOnInit() {
    
  }
  showNotes(){
    let token = localStorage.getItem("token")
    console.log(token)
    let data ={
      token : token
    }
    this._NotesService.pageNotes(data).subscribe((res)=>{
      this.notes = res.notes;
    },(error) =>{
      console.log(error);
    });
  }
}
