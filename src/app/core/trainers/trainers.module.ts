import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainersComponent } from './trainers.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TrainersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path:'',
      component:TrainersComponent
    }])
  ]
})
export class TrainersModule { }
