import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn:"root"})

export class SkillsService {
    // url:string ='https://api.skillspire.in/api/trainer/?sortBy=reverse:created_at&popular=1'
    url:string = 'https://api.skillspire.in/api'
    constructor(private http:HttpClient){}

    getTrainerdata():Observable<any>{
        return this.http.get(`${this.url}/trainer`, {params:{'sortBy':'reverse:created_at','popular':1}})
    };

    getTestimonialsData(){
        const url = 'https://api.skillspire.in/api/testimonial/?sortBy=reverse:created_at&limit=100&popular=1'
        return this.http.get(url)
    };

    getBlogsData(){
        return this.http.get('https://api.skillspire.in/api/blog/?sortBy=reverse:created_at&popular=1&limit=6&page=1')
    };

    getProgramsCategoryData(){
        // 'https://api.skillspire.in/api/program/categories/?popular=1'
        return this.http.get(`${this.url}/program/categories`,{params:{"popular":1}})
    };

    // https://api.skillspire.in/api/program/?sortBy=reverse:created_at&limit=6&page=1&popular=1
    getProgramsListsData(){
        return this.http.get('https://api.skillspire.in/api/program/?sortBy=reverse:created_at&limit=6&page=1&popular=1')
    }
}