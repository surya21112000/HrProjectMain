import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
 ss='ss'
 postss:any
 postaa:any
 postForm:any|FormGroup

  ngOnInit(): void {
this.postForm = new FormGroup({

  reason: new FormControl(null,Validators.required),
  firstdate: new FormControl(null,Validators.required),
  seconddate: new FormControl(null,Validators.required)
}),
this.http.get('/api/leave').subscribe(res=>{

this.postss= res
console.log("response"+res);

console.log("posts"+this.postss);

for(let post of this.postss){
  if(post.email=this.accCre){
    this.postaa=post
    console.log("SUccccccc");
    console.log(this.postaa);



  }

}


console.log(this.postss.email);
// console.log(this.accCre);




})














this.accCre=this.https.getAcc()
this.http.get('api/employeeDetails').subscribe(response=>{
  this.verify=response


for(let post of this.verify){

if(post.email==this.accCre){
  this.FinalAcc=post
  console.log(this.FinalAcc);

}

}
  console.log(this.verify[4].email);


})





  }
  forms=true

openForm(){
this.form=true
this.http.post('/api/slkf',this.form)
}
closeForm(){
  this.form=false

}
fdate:Date|any
sdate:Date|any
funct(e: any){
  this.fdate=e.target.value;




}
f:any
dis=false

Funct(e: any){
  this.sdate=e.target.value;
console.log(this.fdate);
var date = new Date(this.fdate).getTime()
var date1 = new Date(this.sdate).getTime()
  this.f =(date1-date)/86400000
// console.log(date);
// console.log(date1);
console.log(this.f);

// alert("Total no of Days"+this.f);



}
selectedi:any
  posts ={ totaldays:""}
  nam='surya'
  posta:any

sub(sel:any){
  console.log(sel.value);

  console.log(this.posts);
  this.posts.totaldays= this.f
  this.dis= true
  // console.log(this.postForm.value);
  this.forms=false
  this.form=false
  let c = {...this.postForm.value,...this.posts}
  console.log(c);


  console.log(this.selectedi.options[this.selectedi.selectedIndex].text);


}
unSub(){
  this.dis=false

}
acc={email:"",totaldays:"",leavetype:""}

onSub(sel:any){
  this.acc.leavetype=sel.value
  console.log("YES");
  this.acc.totaldays=this.f
  this.acc.email=this.https.getAccName()
  this.posta={...this.postForm.value,...this.acc}
  // this.http.post('/api/')
this.http.post('/api/leave',this.posta).subscribe(res=>{
  console.log(res);

})
}

}





