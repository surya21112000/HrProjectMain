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
    this.http.get('https://hr-management-39a7f-default-rtdb.asia-southeast1.firebasedatabase.app/employeedetails.json').pipe(map((response:any)=>{
      let posts =[];
      for(let key  in response ){
        posts.push({...response[key],key});
      }
      return posts;
    })).subscribe(response=>{
      this.post=response
      // console.log(this.post);

    })
  }
}
