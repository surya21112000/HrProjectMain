import { JsonPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-leavereq',
  templateUrl: './leavereq.component.html',
  styleUrls: ['./leavereq.component.css']
})
export class LeavereqComponent implements OnInit {
[x: string]: any;
  isShown:boolean |any
form=false
  constructor(private http:HttpClient,private https:HttpService) { }
post:any[]=[]
 accCre: any;
 verify:any;
 FinalAcc:any;
 postss:any=[]
 postaa:any=[]
 postForm:any|FormGroup
 accName:any

  ngOnInit(): void {

this.accName=this.https.getAcc()




this.postForm = new FormGroup({

  reason: new FormControl(null,Validators.required),
  firstdate: new FormControl(null,Validators.required),
  seconddate: new FormControl(null,Validators.required)
}),
this.http.get('/api/leave').subscribe(res=>{

this.postss= res


// if(this.postss.email==this.accName){
for(let post of this.postss){




  if(post.email==this.accCre){

console.log("Selected " +post.email);

    this.postaa.push(post)



  }

}







})














this.accCre=this.https.getAcc()
this.http.get('api/employeeDetails').subscribe(response=>{
  this.verify=response


for(let post of this.verify){

if(post.email==this.accCre){
  this.FinalAcc=post


}

}



})





  }
  forms=true

openForm(){
this.form=true
this.postss=[]

}
closeForm(){
  this.form=false

}
fdate:Date|any
sdate:Date|any
cdate:any
funct(e: any){
  this.fdate=e.target.value;
 var todate:any=new Date(this.fdate).getDate()+1
if(todate<10){
  todate= "0" +todate


}
var tomonth:any = new Date(this.fdate).getMonth()+1
if(tomonth<10){
  tomonth="0" +tomonth
}
var toyear:any = new Date(this.fdate).getFullYear()

this.cdate=toyear +"-"+tomonth+"-"+todate




}
f:any
dis=false

Funct(e: any){
  this.sdate=e.target.value;

var date = new Date(this.fdate).getTime()
var date1 = new Date(this.sdate).getTime()
  this.f =(date1-date)/86400000


// alert("Total no of Days"+this.f);



}
selectedi:any
  posts ={ totaldays:""}
  nam='surya'
  posta:any

sub(sel:any){


  this.posts.totaldays= this.f
  this.dis= true

  this.forms=false
  this.form=false
  let c = {...this.postForm.value,...this.posts}



}
unSub(){
  this.dis=false

}
acc={email:"",totaldays:"",leavetype:"",name:"",status:"",remarks:""}

onSub(sel:any){

  this.acc.leavetype=sel.value
  this.acc.name=this.https.getAccName()
  this.acc.totaldays=this.f
  this.acc.email=this.accName
  this.acc.status="Pending"
  this.acc.remarks="-"


  this.posta={...this.postForm.value,...this.acc}





  // this.http.post('/api/')
this.http.post('/api/leave',this.posta).subscribe(res=>{



})
this.http.get('/api/leave').subscribe(res=>{
this.postaa=[]
  this.postss= res


  // if(this.postss.email==this.accName){
  for(let post of this.postss){




    if(post.email==this.accCre){

  console.log("Selected " +post.email);

      this.postaa.push(post)



    }

  }







  })












}

}





