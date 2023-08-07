import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { PopUpComponent } from '../dashboard/pop-up/pop-up.component';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent implements OnInit{

  bsModalRef?: BsModalRef;
  trainers_data:any[]=[];
  currentPage:number = 1
  pageLimit:number = 6;
  isButton:boolean = true
  constructor( 
    private modalService: BsModalService,
    private skillsService : SkillsService,
    ){}

  ngOnInit(): void {
    this.getTraiers()
  };

  getTraiers(){      
      this.skillsService.getTrainesrdata(this.pageLimit, this.currentPage).subscribe( (response:any)=>{
        console.log(response)
        this.trainers_data = this.trainers_data.concat(response.DATA.trainers)
      })
  
  }
  onNextPageClick(){
    this.currentPage++;
    this.getTraiers()
  }
 
  popup_Open( name:string,designation:string,read_more:string){
    const initialState: ModalOptions = {
      initialState: {
        short_bio: read_more,
        name:name,
        designation:designation
      }
    };
    this.bsModalRef = this.modalService.show(PopUpComponent, initialState);
    const modalWidth = 'modal-lg';
    this.bsModalRef?.setClass(modalWidth);
  }
}
