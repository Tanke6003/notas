import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SignInService } from './sign-in.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
  providers: [SignInService]
})
export class SignInPage implements OnInit {
  signInForm: FormGroup;
  constructor(private _SignInService: SignInService,
              public formBuilder:FormBuilder,
              public navCtrl:NavController,
              public alertController: AlertController) 
  { 
    this.signInForm =this.formBuilder.group({
      'email':new FormControl("",Validators.required),
      'password':new FormControl("",Validators.required)
    });
    
    

  }

  ngOnInit() {
  }
  
  signIn(){
    let form = this.signInForm.value
    
    this._SignInService.signIn(form).subscribe((res)=>{
      if(res.status){
      this.signInForm.reset();
      localStorage.setItem("token" , res.token)
      this.navCtrl.navigateForward('menu/inicio');
      }
      else{
        this.presentAlert(res.header,res.errorMessage);
      }
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
