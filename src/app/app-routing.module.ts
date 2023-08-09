import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './core/layouts/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardLayoutComponent,
    children:[
      {
        path:'',
        loadChildren:()=>import('./core/dashboard/dashboard.module').then(m=>m.DashboardModule)
      },
     {
      path:'',
      loadChildren:()=>import('./core/programs/programs.module').then(m=>m.ProgramsModule)
     },
     {
      path:'trainers',
      loadChildren:()=>import('./core/trainers/trainers.module').then(m=>m.TrainersModule)
     },
     {
      path:'jobs',
      loadChildren:()=>import('./core/jobs/jobs.module').then(m=>m.JobsModule)
     },
     {
      path:'',
      loadChildren:()=>import('./core/blogs/blogs.module').then(m=>m.BlogsModule)
     },

    ]

  },
  {
    path:'auth',
    component:AuthLayoutComponent,
    loadChildren: ()=> import('./core/auth/auth.module').then(m=>m.authModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
