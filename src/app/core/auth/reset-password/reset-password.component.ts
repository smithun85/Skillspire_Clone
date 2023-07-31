import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm:FormGroup | any

  constructor(
    private router:Router
  ){};

  ngOnInit(): void {
    this.resetPasswordForm = new FormGroup({
      email:new FormControl('', [Validators.required]),
      oldPassword:new FormControl('', [Validators.required]),
      newPassword:new FormControl('', [Validators.required]),
    })
  }

  gotoLogin(){
    this.router.navigate(['auth'])
  };

  onSubmit(){
    console.log(this.resetPasswordForm.value);
    this.router.navigate(['auth'])
  }
}
