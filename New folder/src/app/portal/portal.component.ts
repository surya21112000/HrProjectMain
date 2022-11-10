import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
id='default'
  constructor(private http:HttpClient) { }
post:any=[]
  ngOnInit(): void {
    this.getEmployeeDetails()
  }
  PersonalDetails(){
this.id="personal"
  }
  getEmployeeDetails(){
    this.http.get('/api/employeeDetails').subscribe(response=>{
      this.post=response
      // console.log(this.post);

    })
  }
}
