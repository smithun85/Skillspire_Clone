import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { AuthService } from '../../services/auth.service';
import { SignupComponent } from '../signup/signup.component';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  bsModalRef?: BsModalRef;
  loginForm:FormGroup | any

 constructor(
  private router:Router,
  private login_post:AuthService,
  private modalService: BsModalService
 ){};

 ngOnInit(): void {
   this.loginForm = new FormGroup({
    email:new FormControl('', [Validators.required,Validators.email]),
    password:new FormControl('', [Validators.required,Validators.minLength(6)])
   })
 };

 get login(){
  return this.loginForm.controls
 };

 openForgetPassword(){
  this.bsModalRef = this.modalService.show(ForgetPasswordComponent);
 }
 openSignupComponent() {
  this.bsModalRef = this.modalService.show(SignupComponent);
}
openResetPassword(){
  this.bsModalRef = this.modalService.show(ResetPasswordComponent)
}

 onSubmit(){
  if(this.loginForm.invalid){
    this.loginForm.markAllAsTouched()
    return 
  }
  // console.log(this.loginForm.value);
  const login = this.loginForm.value;
  // console.log('email:',login.email, 'password:',login.password);
  this.login_post.login(login)
  this.router.navigate(['dashboard'])
 }

}
