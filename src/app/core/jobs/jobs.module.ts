import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    JobsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:'',
      component:JobsComponent
    }])
  ]
})
export class JobsModule { }