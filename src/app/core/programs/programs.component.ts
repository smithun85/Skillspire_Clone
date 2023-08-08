import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  public  sortBy:string='start_date';
  public sorted_data:any[]=[];
  public filtered_data:any[]=[];
  public programs_data:any[]=[];

  constructor(
    private _skillService:SkillsService
  ){}

  ngOnInit(): void { 
    this.getFilterSortig_data();
    this.getPrograms_data()
  };

  getFilterSortig_data(){
    this._skillService.getFilterSorting().subscribe( (response:any)=>{
      console.log(response);
      this.sorted_data = response.DATA.sorting;
      this.filtered_data = response.DATA.filters;

    });
  };

  getPrograms_data(){
    this._skillService.getProgramsPage(this.sortBy).subscribe( (response:any)=>{
      this.programs_data = response.DATA.programs;
    });
  }; 

}
