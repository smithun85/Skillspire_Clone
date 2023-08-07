import { Component } from '@angular/core';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  blogs_data:any[]=[];
  currentPage:number = 1
  pageLimit:number = 6;
  isButton:boolean = true
  constructor( 
    private skillsService : SkillsService,
    ){}

  ngOnInit(): void {
    this.getBlogs()
  };

  getBlogs(){      
      this.skillsService.getblogs(this.pageLimit, this.currentPage).subscribe( (response:any)=>{
        console.log(response)
        this.blogs_data = this.blogs_data.concat(response.DATA.blogs)
      })
  
  }
  onNextPageClick(){
    this.currentPage++;
    this.getBlogs()
  }
 
}
