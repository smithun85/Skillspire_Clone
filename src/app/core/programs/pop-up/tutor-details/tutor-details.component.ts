import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-tutor-details',
  templateUrl: './tutor-details.component.html',
  styleUrls: ['./tutor-details.component.scss']
})
export class TutorDetailsComponent {

  tutorDetails?:any

  
 

  constructor(public bsModalRef: BsModalRef) {}
}
