import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ILogin } from "../models/login.model";
import { Observable } from "rxjs";

@Injectable({providedIn:"root"})

export class AuthService {

    private baseUrl:string = ''
    private headers:any = {
        headers:{
            Authorization:'Bearer' + 'token'
        }
    }

    constructor(private http:HttpClient){}

    login(loginForm:ILogin):Observable<any>{
        console.log(loginForm);
        return this.http.post(this.baseUrl,loginForm)
    }

    loadUser(){
        return this.http.get(this.baseUrl,this.headers)
    }
}