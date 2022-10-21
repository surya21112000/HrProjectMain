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










    this.http.get('/api/leave').subscribe(res=>{
      this.postss= res





    })



  }
  status:any
myFunct(id:any,remarks:any){
  this.form=false
  this.status="Approved"
const endpointURL=('/api/leave/'+id+'/'+this.status)
console.log(endpointURL);
this.http.put(endpointURL,{status:'{{this.status}}'}).subscribe()

this.http.get('/api/leave').subscribe(res=>{
  this.postss=[]
    this.postss= res
})
const endpointURL1=('/api/leaves/'+id+'/'+remarks.value)
this.http.put(endpointURL1,{remarks:"{{remarks.value}}"}).subscribe()


}
form=false
details={name:"",leavetype:"",reason:"",from:"",to:"",id:""}
popup(name:any,leavetype:any,reason:any,from:any,to:any,id:any){
this.form=true

this.details.name=name
this.details.leavetype=leavetype
this.details.reason=reason
this.details.from=from
this.details.to=to
this.details.id=id

}
myFuncti(id:any,remarks:any){
  this.form=false


  this.status="Declined"
const endpointURL=('/api/leave/'+id+'/'+this.status)
console.log(endpointURL);
this.http.put(endpointURL,{status:'{{this.status}}'}).subscribe()

this.http.get('/api/leave').subscribe(res=>{
  this.postss=[]
    this.postss= res
})
// const endpointURL1=('/api/leaves/'+id+'/'+remarks.value)
// this.http.put(endpointURL1,{remarks:"{{remarks.value}}"}).subscribe()
const endpointURL1=('/api/leaves/'+id+'/'+remarks.value)
this.http.put(endpointURL1,{remarks:"{{remarks.value}}"}).subscribe()



}


  }
