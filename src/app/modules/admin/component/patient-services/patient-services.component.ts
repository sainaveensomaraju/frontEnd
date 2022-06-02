import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-services',
  templateUrl: './patient-services.component.html',
  styleUrls: ['./patient-services.component.css']
})
export class PatientServicesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  addPatient(){
  console.log("akshdgk")
this.router.navigate(["./add-patient"])
}
}
