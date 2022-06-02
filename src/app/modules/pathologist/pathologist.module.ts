import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PathologistRoutingModule } from './pathologist-routing.module';
import { LabDashboardComponent } from './component/lab-dashboard/lab-dashboard.component';
import { PatientlistComponent } from './component/patientlist/patientlist.component';
import { AddtestComponent } from './component/addtest/addtest.component';
import { AppointmentstatusComponent } from './component/appointmentstatus/appointmentstatus.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';


@NgModule({
  declarations: [
    LabDashboardComponent,
    PatientlistComponent,
    AddtestComponent,
    AppointmentstatusComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PathologistRoutingModule
  ]
})
export class PathologistModule { }
