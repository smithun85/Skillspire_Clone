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

  itemsPerSlide = 5;
  singleSlideOffset = true;

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
}
