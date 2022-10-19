import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClientModule) { }
  accdetails:any
  accName:any
pushAcc(emp:any){
  this.accdetails=emp

}
getAcc(){
return this.accdetails
}
pushAccName(name:any){
this.accName=name
}
getAccName(){
return this.accName
  }
}
