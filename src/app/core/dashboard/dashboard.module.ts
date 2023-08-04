import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing';
//  carousel-library

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllComponent } from './all/all.component';
import { PersonalDevelopmentComponent } from './personal-development/personal-development.component';

import { WritingComponent } from './writing/writing.component';
import { FinanceComponent } from './finance/finance.component';
import { ProfessionalDevelopmentComponent } from './professional-development/professional-development.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AllComponent,
    PersonalDevelopmentComponent,
    WritingComponent,
    FinanceComponent,
    ProfessionalDevelopmentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    SlickCarouselModule,
    CarouselModule.forRoot(),
    HttpClientModule

  ],
})
export class DashboardModule { }
