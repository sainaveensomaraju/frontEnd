import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { HeaderComponent } from './component/header/header.component';

import { ViewallpatientComponent } from './component/viewallpatient/viewallpatient.component';
import { EditselfComponent } from './component/editself/editself.component';
import { AllappointmentsComponent } from './component/allappointments/allappointments.component';
import { DoctorDashboardComponent } from './component/doctor-dashboard/doctor-dashboard.component';
import { FooterComponent } from './component/footer/footer.component';


@NgModule({
  declarations: [
  
    HeaderComponent,
   
    
    ViewallpatientComponent,
    EditselfComponent,
    AllappointmentsComponent,
    DoctorDashboardComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
