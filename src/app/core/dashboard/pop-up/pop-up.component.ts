import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {

  name?: string;
  designation?: string;
  short_bio?: string;

  
 

  constructor(public bsModalRef: BsModalRef) {}
}
