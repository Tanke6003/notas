import { Component, OnInit } from '@angular/core';
import { SignUpService } from './sign-up.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  providers: [SignUpService]
})
export class SignUpPage implements OnInit {
  signUpForm: FormGroup;

  constructor(private _SignUpService: SignUpService,public formBuilder:FormBuilder) { 
    this.signUpForm =this.formBuilder.group({
      'nickName':new FormControl("",Validators.required),
      'email':new FormControl("",Validators.required),
      'password':new FormControl("",Validators.required),
    });
    

  }

  ngOnInit() {
  }
  signUp(){
    let form = this.signUpForm.value
    this._SignUpService.signUp(form).subscribe((res)=>{
      let token = res.token;
      this.signUpForm.reset();
      localStorage.setItem('token',token);
    },(error) =>{
      console.log(error);
    });
  }

}
