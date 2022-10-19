import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { HttpService } from '../services/http.service';
import { MongodbService } from '../servicess/mongodb.service';
import * as bcrypt from 'bcryptjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginMode=true;
  constructor(private htt :HttpClient,private https:HttpService,private route:Router,private serv:MongodbService,private service:AuthService) { }
  AccountType='s'
  accounts:any=['Employee','Admin']


onSwitchMode(){
  this.isLoginMode=!this.isLoginMode




}
postForm:FormGroup | any;
LoginForm:FormGroup | any;

employee:any=[]








selected=''
onSignUp(){
  // console.log(emp.value);
  // console.log(emp1.target.value);

const newPost = {
  email:this.postForm.value.email,
  password:this.postForm.value.password
}
const adPost={
  email:this.postForm.value.email,
  password:this.postForm.value.password,
  firstname:this.postForm.value.firstname,
  lastname:this.postForm.value.lastname,
}
// console.log(this.opt);

const emps =(this.opt);
// console.log(emps);
 if(emps=='Employee'){
  // console.log("Selected Employee");
  this.htt.post('api/posts',newPost).subscribe(data=>{
    // console.log(data);

   })
  // console.log(newPost);
  this.isLoginMode=!this.isLoginMode
 }
 else{
  // console.log(adPost);

   console.log("Selected Admin");
  this.htt.post('api/admins',adPost).subscribe(data=>{
    //  console.log(data);
     this.isLoginMode=!this.isLoginMode
       })

}





}
postList:any
adminList:any
empLogin:any
adminLogin:any

admin:any=[]

  ngOnInit(){





    this.htt.get('api/admins').subscribe(response=>{
this.adminLogin=response
    })
    // console.log(this.adminLogin);
    this.htt.get('api/posts').subscribe(response=>{
      this.empLogin=response
    })



//-------------------------------------------------------------------------
    // this.htt.get('/api/posts').subscribe((response=>{
    //   this.postList=response
    //   console.log("Successful");
    //   console.log(this.postList);


    // }))
    // this.htt.get('/api/admins').subscribe((data) => {
    //   this.adminList= data;
    // });
    // console.log("Here");



    this.postForm= new FormGroup({
      email: new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required),
      firstname: new FormControl(null,Validators.required),
      lastname: new FormControl(null,Validators.required)
    })
      this.LoginForm=new FormGroup({
        email:new FormControl(null,Validators.required),
        password:new FormControl(null,Validators.required)
      })

  }
  logdisplay=true
valid:any
valid1:any
boo:any
boo1:any
onLogin(){

this.htt.get('api/admins').subscribe(res=>{
this.valid=res
  for(let i of this.valid){
    // console.log(i.password);
  this.boo= bcrypt.compareSync(this.LoginForm.value.password,i.password)
// console.log(this.boo);
if(this.boo==true&&this.LoginForm.value.email==i.email){
  this.route.navigateByUrl('/employeeDetails')
  this.service.admin()
  this.https.pushAcc(this.LoginForm.value.email)
  this.https.pushAccName(i.firstname)
  console.log("pushed"+i.firstname);

  // this.https.pushAccName(i.firstname)
  // console.log("Name pushed  " +i.firstname);
console.log(this.https.getAccName());

this.service.logStatus()
}



  }

})

this.htt.get('/api/posts').subscribe(res=>{
  this.valid1=res
  for(let i of this.valid1 ){
    this.boo1=bcrypt.compareSync(this.LoginForm.value.password,i.password)



    if(this.boo1==true&&this.LoginForm.value.email==i.email){
      // console.log("Successfull");

      this.route.navigateByUrl('/employeeDetails')
      this.service.employee()
      this.https.pushAcc(this.LoginForm.value.email)





    this.service.logStatus()


    }
  }
})
  for(let posts of this.empLogin){
    // console.log(this.employee);console.log(this.LoginForm.value);



    if(this.LoginForm.value.email==posts.email&&this.LoginForm.value.password==posts.password){
      this.route.navigateByUrl('/employeeDetails')
      this.service.employee()
      this.https.pushAcc(this.LoginForm.value.email)
this.service.logStatus()

    }
    else {
      for(let post of this.adminLogin){



        if(this.LoginForm.value.email==post.email&&this.LoginForm.value.password==post.password){
          this.route.navigateByUrl('/employeeDetails')
          this.service.admin()
          this.service.logStatus()
          this.https.pushAcc(this.LoginForm.value.email)
        }




    }
    }


  }

}
opt:String|any
choice=true
lok:any
myfun(e:any){
    this.opt=  e.target.value;


    // console.log(this.opt);

       if(this.opt=='Employee'){
        this.choice=true
       }
       else{
        this.choice=false
       }
      //  console.log(this.choice);



}
}
