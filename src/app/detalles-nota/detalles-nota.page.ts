import { Component, OnInit,ChangeDetectorRef   } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetallesNotaService } from '../detalles-nota/detalles-nota.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
@Component({
  selector: 'app-detalles-nota',
  templateUrl: './detalles-nota.page.html',
  styleUrls: ['./detalles-nota.page.scss'],
  providers:[DetallesNotaService]
})
export class DetallesNotaPage implements OnInit {
  idNote: number;
  date :Date;
  title: string;
  description: string;
  id:number;
  constructor(private activeRoute: ActivatedRoute,
    private _DetallesNotaService: DetallesNotaService,
    public Formbuilder : FormBuilder,
    private changeRef: ChangeDetectorRef) { 
     }

  ngOnInit() {
    this.idNote = this.activeRoute.snapshot.params.idNote;
    this._DetallesNotaService.showDetallesNota({token:localStorage.getItem("token"),idNote:this.idNote}).subscribe((res)=>{
      console.log(res.note)
      let note = res.note;
      this.date = note.date;
      this.title = note.title;
      this.description = note.description;
      this.idNote = note.idNote;
    })
  }

}
