import { Injectable } from "@angular/core";
import { ɵInjectableAnimationEngine } from "@angular/platform-browser/animations";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { HttpService } from "../services/http.service";
@Injectable({
  providedIn:'root'
})


export class Activate implements CanActivate{

  access=false
  constructor(private https:HttpService,private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

this.access=this.https.getLogStatus()

if(this.access==true){
  return true
}
else{
  this.router.navigateByUrl('/login')
return false

}


return true
  }
}
