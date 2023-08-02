import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsComponent } from './programs.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProgramsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:'',
      component:ProgramsComponent
    }])
  ]
})
export class ProgramsModule { }
