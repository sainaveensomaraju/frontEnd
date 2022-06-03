import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.css']
})
export class DeletePatientComponent implements OnInit {
public allPats:any=[]
  constructor(private patserv:PatientService) { }

  ngOnInit(): void {
    this.patserv.getAllDoctorsFromDatabase().subscribe(
      data=>{
        if(data !=null)
        this.allPats=data;
        else
        alert("no data found")
      }
    )
  }
  deletePatient(num:string){
    let id=parseInt(num);
  }
}
