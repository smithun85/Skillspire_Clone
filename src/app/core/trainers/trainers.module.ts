import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainersComponent } from './trainers.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TrainersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:'',
      component:TrainersComponent
    }])
  ]
})
export class TrainersModule { }
