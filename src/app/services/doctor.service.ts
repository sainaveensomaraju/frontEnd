import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idoctor } from '../models/doctor';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient,private loginserv:LoginService) { }

  private MainUrl: string = "http://localhost:9051/";
  private addDocUrl: string = this.MainUrl +this.loginserv.userName+"/add";
  private allDocUrl: string = this.MainUrl +"get"
  private getByIdUrl: string = this.MainUrl + "admin/searchid/";
  private getByNameUrl: string = this.MainUrl + "admin/searchname/";
  private deleteByIdUrl: string = this.MainUrl + this.loginserv.userName+"/deletebyid/"

  public addDoctorToDatabase(doctor: Idoctor): Observable<Idoctor> {
    
    return this.http.post<Idoctor>(this.addDocUrl, doctor);
   
  
  }

  public getAllDoctorsFromDatabase(): Observable<Idoctor[]> {
    return this.http.get<Idoctor[]>(this.allDocUrl);

  }
  public getDoctorFromDatabaseById(id: number): Observable<Idoctor> {

    return this.http.get<Idoctor>(this.getByIdUrl + id);
  }
  public getDoctorFromDatabaseByNmae(name: string): Observable<Idoctor> {

    return this.http.get<Idoctor>(this.getByNameUrl + name);
  }
  public deleteDoctorFromDatabaseById(id: number): Observable<boolean> {

    return this.http.delete<boolean>(this.deleteByIdUrl + id);
  }


}
