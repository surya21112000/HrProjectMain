import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.css']
})
export class GettingStartedComponent implements OnInit {
  view=false;
[x: string]: any;
display=false
  constructor(private http:HttpClient) { }
  postForm:FormGroup | any
  postFormE:FormGroup | any
  post:any=[]
  Verify:any=['suryyyyyyyyyyyyy']
  authPost:any=[]
 addProf(){
  this.display=true
 const postData=this.postForm.value
 this.http.post('https://hr-management-39a7f-default-rtdb.asia-southeast1.firebasedatabase.app/employeeProf.json',postData).subscribe(response=>{

  this.http.get('https://hr-management-39a7f-default-rtdb.asia-southeast1.firebasedatabase.app/employeeProf.json').pipe(map((response:any)=>{
    let posts =[];
    let AuthPost=[]
    for(let key  in response ){
      posts.push({...response[key],key});
    }
    return posts;
  })).subscribe(response=>{
    this.post=response
    // console.log(this.post);

  })
  
  

 })
 console.log(this.postForm.value.email);
 
 for(let i =0;i<this.authPost.length;i++){
  if(this.postForm.value.email==this.authPost[i].email){
    this.Verify=this.authPost
    console.log(this.Verify);
    
  }
  // for(let j=0;j<this.post.length;j++)
     
    // if(this.authPost[i].email==this.post[j].email){
  
    //  this.Verify=this.post[j]
    //  console.log(this.Verify);
     

    // }
  }}
  ngOnInit(): void {
    this.postForm=new FormGroup({
      fullname: new FormControl(null,Validators.required),
      fathername: new FormControl(null,Validators.required),
      aadharnumber: new FormControl(null,[Validators.required,Validators.minLength(16),]),
      mobilenumber: new FormControl(null,Validators.required),
      address: new FormControl(null,Validators.required),
     mothername: new FormControl(null,Validators.required),
      dob: new FormControl(null,Validators.required),
      qualification: new FormControl(null,Validators.required),
     doj: new FormControl(null,Validators.required),
      designation: new FormControl(null,Validators.required),
      email:new FormControl(null,Validators.email)




    })
   
    
    this.getProfDetails()
    this.getLogDetails()

 
   
 


    }
    getProfDetails(){
      this.http.get('https://hr-management-39a7f-default-rtdb.asia-southeast1.firebasedatabase.app/employeeProf.json').pipe(map((response:any)=>{
        let posts =[];
        for(let key  in response ){
          posts.push({...response[key],key});
        }
        return posts;
      })).subscribe(response=>{
        this.post=response
        // console.log(this.post);
  
      })}
      getLogDetails(){
        this.http.get('https://hr-management-39a7f-default-rtdb.asia-southeast1.firebasedatabase.app/Employees.json').pipe(map((response:any)=>{
          let posts =[];
          for(let key  in response ){
            posts.push({...response[key],key});
          }
          return posts;
        })).subscribe(response=>{
   this.authPost=response
          // console.log(this.post);
    
        })
    }

    Sub(){
    
      
      for(let i =0;i<this.post.length;i++){
  
        
  
        for(let j=0;j<this.post[i].length;)
        {


        }
      }
    }
  
    add(){
      for(let i =0;i<this.authPost.length;i++){
     for(let j=0;j<this.post.length;j++)
        
       if(this.authPost[i].email==this.post[j].email){
     
        this.Verify=this.post[j]
        console.log(this.Verify);
        

       }
       else
       {
        console.log("Failure");
        
       }
     

      }

    }
  }


