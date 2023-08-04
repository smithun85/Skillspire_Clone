import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SignupComponent } from '../auth/signup/signup.component';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

 
  bsModalRef?: BsModalRef;

  itemsPerSlide = 3;
  singleSlideOffset = true;

  isAll:boolean = true
  isPersonal:boolean = false
  isProfessional:boolean = false
  isFinance:boolean = false
  isWriting:boolean = false

  constructor(
    private modalService: BsModalService,
    private skillsService : SkillsService,
  ){}

  ngOnInit(): void {
    this.skillsService.getTrainerdata()
    .subscribe( (res:any)=>{
      console.log(res);
    });

    this.skillsService.getTestimonialsData()
    .subscribe( (res:any)=>{
      console.log(res);
    });

    this.skillsService.getBlogsData()
    .subscribe( (res:any)=>{
      console.log(res);
    });

    this.skillsService.getProgramsCategoryData()
    .subscribe( (res:any)=>{
      console.log(res);
    });

    this.skillsService.getProgramsListsData()
    .subscribe( (res:any)=>{
      console.log(res);
    });



  };
  


openSignupComponent(){
  this.bsModalRef = this.modalService.show(SignupComponent);  
}

// section-3
allShow(){
  this.isAll = true;
  this.isPersonal = false
  this.isProfessional=false
  this.isFinance = false
  this.isWriting = false
};

personalShow(){
  this.isPersonal = true
  this.isAll = false;
  this.isProfessional=false
  this.isFinance = false
  this.isWriting = false
}

ProfessionalShow(){
this.isProfessional=true
this.isAll = false;
this.isPersonal = false
this.isFinance = false
this.isWriting = false
};
FinanceShow(){
  this.isFinance = true
  this.isAll = false;
  this.isPersonal = false
  this.isProfessional=false
  this.isWriting = false
};

writingShow(){
  this.isWriting = true
  this.isAll = false;
  this.isPersonal = false
  this.isProfessional=false
  this.isFinance = false
}
}
