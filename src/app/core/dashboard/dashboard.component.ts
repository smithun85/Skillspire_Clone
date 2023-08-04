import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SignupComponent } from '../auth/signup/signup.component';
import { SkillsService } from '../services/skills.service';
import { SKILLS } from '../models/skills.models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

 
  bsModalRef?: BsModalRef;

  itemsPerSlide:number = 0;
  singleSlideOffset = true;

  programsCategory:any[] = [];
  programLists:any[]= [];
  index:number = 0;
  title:string = '';
  photo:string ='';
  program_type:string = '';
  short_desc:string = '';
  hours_split:string ='';
  minutes_split:string ='';
  discounted_fees:string = '';
  fees:string = '';
  trainer_name:string = '';
  trainer_photo:string = '';
  trainer_exp:string = '';

 

  constructor(
    private modalService: BsModalService,
    private skillsService : SkillsService,
  ){}

  ngOnInit(): void {


    this.skillsService.getTrainerdata()
    .subscribe( (res:any)=>{
      console.log("Trainerdata",res);
    });

    this.skillsService.getTestimonialsData()
    .subscribe( (res:any)=>{
      console.log("TestimonialsData",res);
    });

    this.skillsService.getBlogsData()
    .subscribe( (res:any)=>{
      console.log("BlogsData",res);
    });

    this.skillsService.getProgramsCategoryData()
    .subscribe( (res:any)=>{
      this.programsCategory=res.DATA.categories;
      this.itemsPerSlide = this.programsCategory.length;
      console.log("ProgramsCategoryData:",res.DATA.categories.length);
    });

    this.skillsService.getProgramsListsData()
    .subscribe( (res:any)=>{
      console.log("ProgramsListsData:",res.DATA.programs);
      this.programLists = res.DATA.programs;
      this.photo= this.programLists[this.index].photo;
      this.title = this.programLists[this.index].title;
      this.program_type = this.programLists[this.index].program_type;
      this.short_desc = this.programLists[this.index].short_desc.substring(0,79);
      let duration = this.programLists[this.index].duration;
      // add hours and minutes in time;
     let [hours,minutes] = duration.split(":")   
     this.hours_split = hours;
     this.minutes_split = minutes;

     this.discounted_fees = this.programLists[this.index].discounted_fees;
     this.fees = this.programLists[this.index].fees;
     this.trainer_photo = this.programLists[this.index].trainerData.photo
     this.trainer_name = this.programLists[this.index].trainerData.name
     this.trainer_exp = this.programLists[this.index].trainerData.industry_exp
     
    
    });

  };
  


openSignupComponent(){
  this.bsModalRef = this.modalService.show(SignupComponent);  
};

// section-3
showCategorywiseSkill(index:number){

};
showSkillshortDesc(index:number){
  this.photo= this.programLists[index].photo;
  this.title = this.programLists[index].title;
  this.program_type = this.programLists[index].program_type;
  this.short_desc = this.programLists[index].short_desc;
  let duration = this.programLists[index].duration;
  // add hours and minutes in time;
 let [hours,minutes] = duration.split(":")   
 this.hours_split = hours;
  this.minutes_split = minutes ;
  this.discounted_fees = this.programLists[index].discounted_fees;
  this.fees = this.programLists[index].fees;
  this.trainer_photo = this.programLists[index].trainerData.photo
  this.trainer_name = this.programLists[index].trainerData.name
  this.trainer_exp = this.programLists[index].trainerData.industry_exp
 
}
}
