import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClientModule) { }
  accdetails:any
  accName:any
  access:any
pushAcc(emp:any){
  this.accdetails=emp
  this.access=true
}
getAcc(){
return this.accdetails
}
pushAccName(name:any){
this.accName=name
this.access=true
}
getAccName(){
return this.accName

  }
  getLogStatus(){
    return this.access
  }
}
