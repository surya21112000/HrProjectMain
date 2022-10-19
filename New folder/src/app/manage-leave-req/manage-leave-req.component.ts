import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-manage-leave-req',
  templateUrl: './manage-leave-req.component.html',
  styleUrls: ['./manage-leave-req.component.css']
})
export class ManageLeaveReqComponent implements OnInit {

  constructor(private http:HttpClient,private https:HttpService) { }
  postss:any
  postaa:any
  accCre:any
  allEmails:any
  validation:any
  empDetails:any
  final:any=[]
  ngOnInit(): void {

this.http.get('/api/employeeDetails').subscribe(res=>{
  this.validation=res
  console.log("This vakida"+this.validation.email);

  for(let pos of this.validation){
this.empDetails=pos
console.log("Emp EMails" +this.empDetails.email);

  }
})








    this.accCre=this.https.getAcc()
    this.http.get('/api/leave').subscribe(res=>{
      this.postss= res





    })



  }



  }
