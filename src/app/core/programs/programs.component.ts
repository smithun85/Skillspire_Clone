import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

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
  
  form_skill:FormGroup | any


  constructor(
    private _skillService:SkillsService
  ){}

  ngOnInit(): void { 

    this.form_skill = new FormGroup({
      selected_programs: new FormArray([])
    });

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
    this._skillService.getProgramsPage(this.form_skill.value.selected_programs, this.sortBy).subscribe( (response:any)=>{
      this.programs_data = response.DATA.programs;
    });
  }; 

  onChecked_Skill(event:any, key:string){ 
    console.log("Event:",event.target.value);
    const selected_programs = (this.form_skill.controls['selected_programs'] as FormArray);
    if (event.target.checked) {
      selected_programs.push(new FormControl({[key]:event.target.value}));
    } else {
      const index = selected_programs.controls
      .findIndex(x => x.value == event.target.value);
      // .findIndex(x => console.log(x.value, {[key]:event.target.value}));
      console.log(index);
      console.log(selected_programs);
      selected_programs.removeAt(index);
    };
    console.log(this.form_skill.value.selected_programs);
    this.getPrograms_data()
  }  

  reset(){
    this.form_skill.reset()
  };

  onSelectFilter(e:any){
    console.log(e.target.value);
    this.sortBy = e.target.value;
    this.getPrograms_data();
  }

}