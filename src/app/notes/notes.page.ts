import { Component, OnInit } from '@angular/core';
import { NotesService}       from './notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
  providers: [NotesService]
})
export class NotesPage implements OnInit {
  notes : Array<any>;
  constructor(private _NotesService: NotesService) {
    
    this.ShowNotes();
   }

  ngOnInit() {
  }
  ShowNotes(){
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
