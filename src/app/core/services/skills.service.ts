import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SKILLS } from "../models/skills.model";
@Injectable({providedIn:"root"})

export class SkillsService {
    // Request URL
    // url:string ='https://api.skillspire.in/api/trainer/?sortBy=reverse:created_at&popular=1'

    url:string = 'https://api.skillspire.in/api'
    constructor(private http:HttpClient){}

    getTrainerdata(){
        return this.http.get(`${this.url}/trainer`, {params:{'sortBy':'reverse:created_at','popular':1}})
    };

    getTrainesrdata(limit:number, page:number){
        return this.http.get(`${this.url}/trainer`, {params:{'sortBy':'reverse:created_at','limit':limit ,'page':page}})
    }

    getTestimonialsData(){
        const url = 'https://api.skillspire.in/api/testimonial/?sortBy=reverse:created_at&limit=100&popular=1'
        return this.http.get(url)
    };

    getBlogsData(){
        return this.http.get('https://api.skillspire.in/api/blog/?sortBy=reverse:created_at&popular=1&limit=6&page=1')
    };

    getblogs(limit:number, page:number){
        return this.http.get(`${this.url}/blog`, {params:{'sortBy':'reverse:date','limit':limit,'page':page}})
    }

    getProgramsCategoryData(){
        return this.http.get(`${this.url}/program/categories`,{params:{"popular":1}})
    };

    getProgramsAllListsData(){
        return this.http.get(`${this.url}/program`, {params:{'sortBy':'reverse:created_at','limit':6,'page':1,'popular':1}})
    };

    getCategoryPersonalDev(){
        return this.http.get(`${this.url}/program`, {params:{'sortBy':'reverse:created_at','limit':6,'page':1,'popular':1, 'categories':'personal-development' }})
    };

    getCategoryProfessionalDev(){
        return this.http.get(`${this.url}/program`, {params:{'sortBy':'reverse:created_at','limit':6,'page':1,'popular':1, 'categories':'professional-development'}})
    };
    getCategoryFinanceDev(){
        return this.http.get(`${this.url}/program`, {params:{'sortBy':'reverse:created_at','limit':6,'page':1,'popular':1, 'categories':'finance'}})
    };
    getCategoryWritingDev(){
        return this.http.get(`${this.url}/program`, {params:{'sortBy':'reverse:created_at','limit':6,'page':1,'popular':1, 'categories':'writing'}})
    };

    getCity(){
        return this.http.get(`${this.url}/job/cities`)
    }

    // //api.skillspire.in/api/job?limit=6&page=1&sortBy=reverse:created_at&city=Gandhinagar&search=er
    // searchJobByTitle(title:string){
    //     return this.http.get(`${this.url}/job`, {params:{ 'limit':6, 'page':1, 'sortBy':'reverse:created_at','search':title}})
    // };
    // searchJobByCity(city:string){
    //     return this.http.get(`${this.url}/job`, {params:{ 'limit':6, 'page':1, 'sortBy':'reverse:created_at' ,'city':city}})
    // }
    searchJob(city:string,title:string){
        return this.http.get(`${this.url}/job` , {params:{ 'limit':6, 'page':1, 'sortBy':'reverse:created_at' ,'city':city ,'search':title}})
    }


}