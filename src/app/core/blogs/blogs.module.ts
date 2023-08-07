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
        path:'blogs',
      component:BlogsComponent, 
    },
    {
      path:'blogs/:id',
      component:ReadMoreComponent
    }
  ])
  ],
})
export class BlogsModule { }