import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SignupComponent } from '../../auth/signup/signup.component';
import { LoginComponent } from '../../auth/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  bsModalRef?: BsModalRef;

  constructor(
    private modalService: BsModalService
  ){}

openLoginComponent(){
  this.bsModalRef = this.modalService.show(LoginComponent)
};
openSignupComponent(){
  this.bsModalRef = this.modalService.show(SignupComponent);
}

}
