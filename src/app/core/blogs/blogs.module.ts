import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { RouterModule } from '@angular/router';
import { ReadMoreComponent } from './read-more/read-more.component';



@NgModule({
  declarations: [
    BlogsComponent,
    ReadMoreComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
      path:'',
      component:BlogsComponent,
      children:[
        {
          path:'',
          component:ReadMoreComponent
        }
      ]
    }
  ])
  ],
})
export class BlogsModule { }
