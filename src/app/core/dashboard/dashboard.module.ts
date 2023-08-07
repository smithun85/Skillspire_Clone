import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing';
//  carousel-library

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopUpComponent } from './pop-up/pop-up.component';




@NgModule({
  declarations: [
    DashboardComponent,
    PopUpComponent,
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
