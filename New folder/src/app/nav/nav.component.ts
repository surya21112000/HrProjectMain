import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private service:AuthService,private https:HttpService,private http:HttpClient) { }
display:any
accCre:any
validation:any
validation2:any
Acc:any

  ngOnInit(): void {
    this.accCre=this.https.getAcc()
    console.log(this.accCre);

    this.http.get("/api/admins").subscribe(res=>{
this.validation=res;



for( let post of this.validation){
  if(post.email==this.accCre){
 this.Acc=post.firstname
 console.log("Full"+this.Acc);

  }

}
    })


    this.http.get('api/employeeDetails').subscribe(res=>{
      this.validation2=res;
      for( let post of this.validation2){
        if(post.email==this.accCre){
       this.Acc=post.firstname
       console.log("Full"+this.Acc);

        }

      }

    })
this.https.pushAccName(this.Acc)
  this.display=  this.service.getAdmin()
  // this.display=this.service.getEmployee()


  }

}
