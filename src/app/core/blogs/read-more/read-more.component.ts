import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit {

  blog:any={}

  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _skillService:SkillsService
    ){}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe( (params)=>{
      let blog_query = params.get('id');

      this._skillService.getBlogDetails(blog_query).subscribe( (response:any)=>{ 
        console.log(response);
        this.blog = response.DATA.blog
      })
    })
  }
}
