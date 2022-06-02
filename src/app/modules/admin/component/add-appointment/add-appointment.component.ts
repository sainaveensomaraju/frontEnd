import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Iappointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { PathologyService } from 'src/app/services/pathology.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  constructor(private apmntServ:AppointmentService,private fb:FormBuilder,private docserv:DoctorService,
    private patServ:PatientService,private pathoogyServ:PathologyService) { }
  apmntForm=this.fb.group({
    patId:[],
    docId:[],
    labId:[],
    reason:[]
  })
  allPatients:any=[];
  allLabs:any=[];
  allDoctors:any=[];
 
  get patId(){
    return this.apmntForm.get("patId");
  }
  get docId(){
    return this.apmntForm.get('docId')
  }
  get labId(){
    return this.apmntForm.get('labId')
  }
  get reason(){
    return this.apmntForm.get('reason')
  }
  ngOnInit(): void {
    this.docserv.getAllDoctorsFromDatabase().subscribe(
      d=>{
        this.allDoctors=d;
        if(d=null)
        alert("something went wrong")
      }
    )
    this.patServ.getAllDoctorsFromDatabase().subscribe(
      d=>{
        this.allPatients=d;
        if(d=null)
        alert("something went wrong")
      }
    )
    this.docserv.getAllDoctorsFromDatabase().subscribe(
      d=>{
        this.allDoctors=d;
        if(d=null)
        alert("something went wrong")
      }
    )
  }
  submit(){}
signout(){

}
}
