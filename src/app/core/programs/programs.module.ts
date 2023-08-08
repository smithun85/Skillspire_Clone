import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsComponent } from './programs.component';
import { RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProgramsComponent,
    CourseDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path:'',
      component:ProgramsComponent
    }]),

  ]
})
export class ProgramsModule { }
