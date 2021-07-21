import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import {EditNoteService} from './edit-note.service'
import { Events } from "../events";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.page.html',
  styleUrls: ['./edit-note.page.scss'],
  providers:[EditNoteService]
})
export class EditNotePage implements OnInit {
  idNote: number;
  noteForm: FormGroup;
  constructor(private activeRoute: ActivatedRoute,
    private _EditNoteService: EditNoteService,
    public Formbuilder : FormBuilder,
    public navCtrl:NavController,
    private changeRef: ChangeDetectorRef,
    public events: Events) { 
      this.noteForm = this.Formbuilder.group({
        'title': new FormControl("", Validators.required),
        'description': new FormControl("",Validators.required),
      });
    }

  ngOnInit() {
    this.idNote = this.activeRoute.snapshot.params.idNote;
    let token = localStorage.getItem("token")
    let data ={
      token : token,
      idNote: this.idNote
    }
    this._EditNoteService.getNote(data).subscribe((res)=>{
      let note = res.note;
      console.log(note);
      this.noteForm.controls['title'].setValue(note.title);
      this.noteForm.controls['description'].setValue(note.description);
    },(error) =>{
     console.log(error);
   });
  }
  Edit(){
    let form = this.noteForm.value
    let data = {
      note : form,
      idNote: this.idNote,

    }
    this._EditNoteService.editNote(data).subscribe((res)=>{
      this.noteForm.reset();
      this.events.noteChangeSubject.next();
      this.navCtrl.navigateForward('menu/notes');
    },(error) =>{
      console.log(error);
    });
  }
}
