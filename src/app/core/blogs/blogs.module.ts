import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BlogsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:'',
      component:BlogsComponent
    }])
  ],
})
export class BlogsModule { }
