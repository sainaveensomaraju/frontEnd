import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-delete-doctor',
  templateUrl: './delete-doctor.component.html',
  styleUrls: ['./delete-doctor.component.css']
})
export class DeleteDoctorComponent implements OnInit {

  constructor(private docServ:DoctorService) { }

  ngOnInit(): void {
  }
  public chk:boolean=false;
  deletePatient(num:string){
   let id=parseInt(num);
    this.docServ.deleteDoctorFromDatabaseById(id).subscribe(
      data=>{
        this.chk=data;
      }
    )
  }
}
