import { Component, OnInit,ViewChild } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { SignupComponent } from '../auth/signup/signup.component';
import { SkillsService } from '../services/skills.service';
import { Router} from '@angular/router';
import { PopUpComponent } from './pop-up/pop-up.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 
  bsModalRef?: BsModalRef;

  programsCategory:any[] = [];
  programLists:any[]= [];
  index:number = 0;
  hours_split:string ='';
  minutes_split:string ='';

  slideConfig = {
    "slidesToShow": 4,
     "slidesToScroll":1,
     "infinite" : true,
     "autoplay" : true,
     "autoplaySpeed" : 3000,  
     "pauseOnHower":true, 
    };
    // Popular trainers:
    popular_trainers:any[]=[];
    success_stories:any[]=[];

    // blogs:
    slideConfig_blogs = {
      "slidesToShow": 3,
       "slidesToScroll":1,
       "infinite" : true,
       "autoplay" : true,
       "autoplaySpeed" : 2000,  
       "pauseOnHower":true, 
       "arrows" : false,
      };
      blogsList:any[]=[];
      date:string ='';
      
      
  constructor(
    private router : Router,
    private modalService: BsModalService,
    private skillsService : SkillsService,
  ){}

  ngOnInit(): void {
    this.skillsService.getTrainerdata()
    .subscribe( (res:any)=>{
      console.log("Trainerdata",res);
      this.popular_trainers = res.DATA.trainers
    });

    this.skillsService.getTestimonialsData()
    .subscribe( (res:any)=>{
      console.log("TestimonialsData",res.DATA);
      this.success_stories = res.DATA.testimonials
    });

    this.skillsService.getBlogsData()
    .subscribe( (res:any)=>{
      console.log("BlogsData",res.DATA);
      this.blogsList = res.DATA.blogs;
      res.DATA.blogs.map( (item:any)=>{
    
       res.DATA.blogs.map( (item:any)=>{
        let dates = new Date(item.date);
 
        const options:any = { day: 'numeric', month: 'short', year: 'numeric' };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const parts  = formatter.format(dates);
        // console.log(parts)
        this.date = `${parts[2]} ${parts[0]}, ${parts[4]}`;


        // console.log(formattedDate);
        // this.date = formattedDate
       })
      })
      
    });

    this.skillsService.getProgramsCategoryData()
    .subscribe( (res:any)=>{
      this.programsCategory=res.DATA.categories;
      console.log("ProgramsCategoryData:",res.DATA.categories);
    });

    this.skillsService.getProgramsAllListsData()
    .subscribe( (res:any)=>{
      console.log("ProgramsListsData:",res.DATA.programs);
      this.programLists = res.DATA.programs;
      let duration = this.programLists[this.index].duration;
      // add hours and minutes in time;
     let [hours,minutes] = duration.split(":")   
     this.hours_split = hours;
     this.minutes_split = minutes;    
    });

  };
  


openSignupComponent(){
  this.bsModalRef = this.modalService.show(SignupComponent);  
};
popup_Open( name:string,designation:string,read_more:string){
  const initialState: ModalOptions = {
    initialState: {
      short_bio: read_more,
      name:name,
      designation:designation
    }
  };
  this.bsModalRef = this.modalService.show(PopUpComponent, initialState);
  this.bsModalRef.content.closeBtnName = 'Close';
  const modalWidth = 'modal-lg';
  this.bsModalRef?.setClass(modalWidth);
}

// section-3
showCategorywiseSkill(data:any){
  this.index= 0
  console.log(data)
  if(data === 'personal-development'){
    this.skillsService.getCategoryPersonalDev()
    .subscribe( (res:any)=>{
      console.log(res)
      this.programLists = res.DATA.programs;
       let duration = this.programLists[this.index].duration;
       // add hours and minutes in time;
      let [hours,minutes] = duration.split(":")   
      this.hours_split = hours;
      this.minutes_split = minutes;    
    });
  }
  if(data==='professional-development'){
    this.skillsService.getCategoryProfessionalDev()
    .subscribe( (res:any)=>{
      this.programLists = res.DATA.programs;
       let duration = this.programLists[this.index].duration;
       // add hours and minutes in time;
      let [hours,minutes] = duration.split(":")   
      this.hours_split = hours;
      this.minutes_split = minutes;    
    });
  }
  if(data === 'finance'){
    this.skillsService.getCategoryFinanceDev()
    .subscribe( (res:any)=>{
      this.programLists = res.DATA.programs;
       let duration = this.programLists[this.index].duration;
       // add hours and minutes in time;
      let [hours,minutes] = duration.split(":")   
      this.hours_split = hours;
      this.minutes_split = minutes;    
    });
  }
  if(data==='writing'){
    this.skillsService.getCategoryWritingDev()
    .subscribe( (res:any)=>{
      this.programLists = res.DATA.programs;
       let duration = this.programLists[this.index].duration;
       // add hours and minutes in time;
      let [hours,minutes] = duration.split(":")   
      this.hours_split = hours;
      this.minutes_split = minutes;    
    });
  }
  if(data==="all"){
    this.skillsService.getProgramsAllListsData()
    .subscribe( (res:any)=>{
      this.programLists = res.DATA.programs;
       let duration = this.programLists[this.index].duration;
       // add hours and minutes in time;
      let [hours,minutes] = duration.split(":")   
      this.hours_split = hours;
      this.minutes_split = minutes;    
    });
  }
 
 
 

 

 
};
showSkillshortDesc(index:number){
  this.index = index
   let duration = this.programLists[index].duration;
  // add hours and minutes in time;
 let [hours,minutes] = duration.split(":")   
 this.hours_split = hours;
  this.minutes_split = minutes ;
};

goToPrograms(){
  this.router.navigate(['/programs'])
}
}