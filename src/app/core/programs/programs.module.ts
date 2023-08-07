import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsComponent } from './programs.component';
import { RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';



@NgModule({
  declarations: [
    ProgramsComponent,
    CourseDetailsComponent
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
