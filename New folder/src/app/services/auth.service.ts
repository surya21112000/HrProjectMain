import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  constructor() { }
  display=false
  admin(){
    this.display=true
  }
  getAdmin(){
    return this.display
  }
  employee(){
    this.display=false
  }
  getEmployee(){
    return this.display
  }
  logDisplay=false
  logStatus(){
    this.logDisplay=true
  }
}
