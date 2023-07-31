import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { customValidatorsService } from '../../shared/Form-validators/custom-validators.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  signupForm:FormGroup | any

  constructor(
    private router:Router,
    private passwordMismatch:customValidatorsService
  ){};

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      firstName:new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25)
      ]),
      lastName:new FormControl('', [
        Validators.required
      ]),
      email:new FormControl('',[
        Validators.required
      ]),
      password:new FormControl('',[
        Validators.required
      ]),
      confirm_Password:new FormControl('',[
        Validators.required
      ])
    },
    // {validators:this.passwordMismatch.passwordMismatchValidator('password','confirm_Password')}
    {validators:this.passwordMismatch.passwordMismatchValidator}
    )
  }

  get signup(){
    return this.signupForm.controls
    
  }

  gotoLogin(){
    this.router.navigate(['auth'])
  }
  onSubmit(){
    if(this.signupForm.invalid){
      this.signupForm.markAllAsTouched();
      return;
    }
    console.log(this.signupForm.value);
    const signup = this.signupForm.value;
    this.router.navigate(['auth'])
  }
}
