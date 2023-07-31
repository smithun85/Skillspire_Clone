import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './core/layouts/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'auth',
    pathMatch:'full'
  },
  {
    path:'auth',
    component:AuthLayoutComponent,
    loadChildren: ()=> import('./core/auth/auth.module').then(m=>m.authModule)
  },
  {
    path:'',
    component:DashboardLayoutComponent,
    children:[
      {
        path:'dashboard',
        loadChildren:()=>import('./core/dashboard/dashboard.module').then(m=>m.DashboardModule)
      },
      // {
      //   path:'booking',
      //   component:xyz,
      //   loadChildren:()=>import('./')
      // }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
