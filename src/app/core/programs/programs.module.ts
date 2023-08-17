import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsComponent } from './programs.component';
import { RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TutorDetailsComponent } from './pop-up/tutor-details/tutor-details.component';



@NgModule({
  declarations: [
    ProgramsComponent,
    CourseDetailsComponent,
    TutorDetailsComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path:'programs',
        component:ProgramsComponent
      },
      {
      path:'programs/:id',
      component:ProgramsComponent
    },
   {
    path:'program/:id',
    component:CourseDetailsComponent
   }
  ]),

  ]
})
export class ProgramsModule { }