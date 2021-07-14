import { Component, OnInit } from '@angular/core';
import { AlertController }   from '@ionic/angular';
import { CreateNoteService} from './create-note.service'
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.page.html',
  styleUrls: ['./create-note.page.scss'],
  providers:[CreateNoteService],
})
export class CreateNotePage implements OnInit {
  CreateNoteForm: FormGroup;
  constructor(private _CreateNoteService: CreateNoteService,
              public formBuilder:FormBuilder,
              public navCtrl:NavController,
              public alertController: AlertController) 
  {
    this.CreateNoteForm = this.formBuilder.group({
      'title':new FormControl("",Validators.required),
      'description':new FormControl("",Validators.required)
    });
   }

  ngOnInit() {
  }
  save(){
    let form = this.CreateNoteForm.value;
    let token = localStorage.getItem("token");
    let data = {
      note:form ,
      token:token
    }
    this._CreateNoteService.save(data).subscribe((res)=>{
      this.navCtrl.navigateForward('menu/inicio');
    },(error) =>{
      console.log(error);
    });
  }
  async presentAlert(header,msg) {
    const alert = await this.alertController.create({
      header: header,
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
