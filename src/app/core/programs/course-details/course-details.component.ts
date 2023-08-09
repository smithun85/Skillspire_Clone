import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkillsService } from '../../services/skills.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { TutorDetailsComponent } from '../pop-up/tutor-details/tutor-details.component';
import { LoginComponent } from '../../auth/login/login.component';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  public courseDetails:any = {}
  hours_split:string ='';
  minutes_split:string ='';

  bsModalRef?: BsModalRef;

  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _skillService:SkillsService,
    private modalService: BsModalService,
    ){}

    ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe( (params)=>{
        let blog_query = params.get('id');

        this._skillService.getProgramCourseDetails(blog_query).subscribe( (response:any)=>{
          console.log(response.DATA.program);
          this.courseDetails = response.DATA.program
          let [hours,minutes] = this.courseDetails.duration.split(":")   
          this.hours_split = hours;
          this.minutes_split = minutes;
        })
      });    
    };

    onTrainerDetails(tutorDetails:any){
      console.log("TutorsData:",tutorDetails);
      const initialState: ModalOptions = {
        initialState: {
          tutorDetails:tutorDetails
        }
      };
      this.bsModalRef = this.modalService.show(TutorDetailsComponent, initialState)
      const modalWidth = 'modal-lg';
      this.bsModalRef?.setClass(modalWidth);
    };

    goToLoginPage(){
      this.bsModalRef = this.modalService.show(LoginComponent)
    }
}
