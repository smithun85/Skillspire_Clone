import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({providedIn:"root"})

export class SkillsService {


    url:string = 'https://api.skillspire.in/api'
    constructor(private http:HttpClient){}

    getTrainerdata(){
        return this.http.get(`${this.url}/trainer`, {params:{'sortBy':'reverse:created_at','popular':1}})
    };

    getTrainesrdata(limit:number, page:number){
        return this.http.get(`${this.url}/trainer`, {params:{'sortBy':'reverse:created_at','limit':limit ,'page':page}})
    }

    getTestimonialsData(){
        const url = `${this.url}/testimonial/?sortBy=reverse:created_at&limit=100&popular=1`
        return this.http.get(url)
    };

    getBlogsData(){
        return this.http.get(`${this.url}/blog/?sortBy=reverse:created_at&popular=1&limit=6&page=1`)
    };

    getblogs(limit:number, page:number){
        return this.http.get(`${this.url}/blog`, {params:{'sortBy':'reverse:date','limit':limit,'page':page}})
    };
    getBlogDetails(id:any){
        return this.http.get(`${this.url}/blog/${id}`)
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

    //api.skillspire.in/api/job?limit=6&page=1&sortBy=reverse:created_at&city=Gandhinagar&search=er
    searchSuggestionByTitle(title:string){
        return this.http.get(`${this.url}/job/search-suggestion`, {params:{'search':title}})
    };
   
    searchJob(title:string, city:string){
        let queryParams = {
            'limit':6, 
            'page':1, 
            'sortBy':'reverse:created_at' ,
            'city':city ,
            'search':title
    }
        return this.http.get(`${this.url}/job` , { params:queryParams });
    };

    getFilterSorting(){
        return this.http.get(`${this.url}/program/filter-sorting-config`)
    };



    getProgramsPage(parameterValues:any[],sortBy:string){
        let queryParams = new HttpParams();
        queryParams = queryParams.append( 'sortBy',sortBy);
        queryParams = queryParams.append('limit',6);
        queryParams = queryParams.append( 'page',1);

         // Append the values to the queryParams
        Object.keys(parameterValues).forEach((key:any) => {          
            queryParams = queryParams.append(key, parameterValues[key]);
            // console.log(queryParams);
        });      
        return this.http.get(`${this.url}/program`, {params:queryParams})
    };

    getProgramCourseDetails(params:any){
        return this.http.get(`${this.url}/program/${params}`)
    };

}