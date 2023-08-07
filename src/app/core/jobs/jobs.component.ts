import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  cities:any[]=[];
  JobSearch_Form:FormGroup | any;
  title:string = '';
  city:string = '';
  isSubmitted:boolean = false
  constructor(
    private skillsService : SkillsService
  ){};

  ngOnInit(): void {
    this.JobSearch_Form = new FormGroup({
      title:new FormControl(''),
      city:new FormControl('')
    })
    this.getCityName()
  };

  getCityName(){
    this.skillsService.getCity().subscribe( (res:any)=>{
      console.log(res);
      this.cities = res.DATA.cities
    });
  };

  getJobByTitle(e:any){
    this.title = e.target.value;
    this.skillsService.searchSuggestionByTitle(this.title).subscribe( (res:any)=>{
      console.log(res);
    });
  };

  getJobByCity(e:any){
    this.city = e.target.value;
    console.log(this.city);
   this.getJobSearch(this.title, this.city);
  };

  getJobSearch(title:string, city:string){
    this.skillsService.searchJob(this.title, this.city).subscribe( (res:any)=>{
      console.log(res);
    });
  };


  FormSubmit(jobSearchForm:any){
    this.isSubmitted = true
    console.log(jobSearchForm.value);
    this.getJobSearch(jobSearchForm.value.title, jobSearchForm.value.city);
  }
}