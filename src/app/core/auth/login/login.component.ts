import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup | any
  email:FormControl | any;
  password:FormControl | any
 constructor(
  private router:Router
 ){};

 ngOnInit(): void {
   this.loginForm = new FormGroup({
    email:new FormControl('', [Validators.required]),
    password:new FormControl('', [Validators.required])
   })
 }

 onSubmit(){
  console.log(this.loginForm.value);
  const login = this.loginForm.value;
  this.email = login.email;
  this.password = login.password;
  console.log(this.email, this.password);
  this.router.navigate(['dashboard'])
 }

}
