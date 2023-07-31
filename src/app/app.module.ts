import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './core/layouts/dashboard-layout/dashboard-layout.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './core/shared/sidebar/sidebar.component';
import { HeaderComponent } from './core/shared/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardModule } from './core/dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    DashboardLayoutComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    FontAwesomeModule,
    DashboardModule, //DashboardComponent use in this module Component SidebarComponnent so must be import that module

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
