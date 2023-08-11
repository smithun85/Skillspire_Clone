import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
  public queryParams_data:any = {};
  public current_params:any = '';
  checkboxStates: any[] = [];
  
  form_skill:FormGroup | any


  constructor(
    private _skillService:SkillsService,
    private _router:Router,
    private _route:ActivatedRoute,
  ){}

  ngOnInit(): void { 

    this.form_skill = new FormGroup({
      selected_programs: new FormArray([])
    });

    this.getFilterSortig_data();
    this.getPrograms_data()
  };

  getFilterSortig_data(){
    
    let new_paramsArr:any[] = [];
    let paramsArr_1:any[] = [];
    let splitparams:any[] = []

    this._route.queryParams.subscribe( (params:any)=>{   
      console.log(params);
      console.log(Object.values(params));
      let paramsValue = ''
      Object.values(params).map( (param:any)=>{
        // console.log(param); 
        paramsArr_1.push(param)
        splitparams = param.split(',') ; 
      })      

     
          new_paramsArr = paramsArr_1.concat(splitparams);
          console.log(new_paramsArr); 
    });         
// ==========================================
        this._skillService.getFilterSorting().subscribe( (response:any)=>{
          // console.log( response.DATA.filters);
          this.sorted_data = response.DATA.sorting;
          this.filtered_data = response.DATA.filters;

          let checked_Object = {}
          let checkedValue =''
          this.filtered_data.map( (parent_label:any)=>{
          // console.log(parent_label);
          let key = parent_label.key;
          // console.log(parent_label[key]);
          parent_label[key].map((checked_label:any)=>{           
            Object.values(checked_label).map( (value:any)=>{
              // console.log(value);
             
              new_paramsArr.map( (checked:any)=>{
              
                if(value ===  checked){
                  console.log(  checked, value);
                  checked_Object = Object.assign(checked_label,{checked:true}) 
                };
              })
            });            
          })        
     })
    });
   
  
  };

  getPrograms_data(){ 
    this._skillService.getProgramsPage(this.queryParams_data, this.sortBy).subscribe( (response:any)=>{
      this.programs_data = response.DATA.programs;
    });
  }; 

  onChecked_Skill(event:any, key:any){ 
    // console.log("Event:",event.target.value);
  this.filtered_data.findIndex((label) => label.key === key);
    let parameterValues:any = {};
    this.queryParams_data = parameterValues
    const selected_programs = (this.form_skill.controls['selected_programs'] as FormArray);
    if (event.target.checked) {
      selected_programs.push(new FormControl({[key]:event.target.value}));
    } else {
      const index = selected_programs.controls.findIndex(x => x.value[key] === event.target.value);
      selected_programs.removeAt(index);
    };
    // console.log(this.form_skill.value.selected_programs);     
    //  set the format of object: {price: 'paid,free', delivery_type: 'On Demand'}
      this.form_skill.value.selected_programs.forEach((param:any )=> {
        // console.log(param);
     const [key]= Object.keys(param); // Get the property name (e.g., 'price', 'level')
      //  console.log("Key_:",key);
     const value = param[key]; // Get the value of the property
    //  console.log("Value_:",value);

       if (parameterValues[key]) {
             parameterValues[key] += `,${value}`;
            // parameterValues[key] =parameterValues[key] +","+ value;
            //  console.log("New Object_:",parameterValues);
           } else {
             parameterValues[key] = value;
            //  console.log("New Object_:",parameterValues);
          };
       });     
      //  console.log("New Object_:",parameterValues);
       // ======================================Navigate to same page:=============================================  
      //  this._router.navigate([], {relativeTo: this._route,queryParams:parameterValues}) //or
      this._router.navigate(['./programs'], {queryParams:parameterValues})

// ===============================================ckecked_Box============

   

    this.getPrograms_data(); 
  }  

  reset(){
    this.form_skill.reset()
  };

  onSelectFilter(e:any){
    console.log(e.target.value);
    this.sortBy = e.target.value;
    this.getPrograms_data();
  };

  goToCourseDetails(params:any){
    this._router.navigate(['./program',params]);
  }

}