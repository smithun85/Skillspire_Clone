import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit{

  forgetPasswordForm :FormGroup | any

  constructor(
    private router:Router
  ){};

  ngOnInit(): void {
    this.forgetPasswordForm = new FormGroup({
      email:new FormControl('',[Validators.required]),
      newPassword:new FormControl('', [Validators.required])
    })
  }

  gotoLogin(){
    this.router.navigate(['auth'])
  }

  onSubmit(){
    console.log(this.forgetPasswordForm.value);
    const value = this.forgetPasswordForm.value
    this.router.navigate(['auth'])
  }
}
