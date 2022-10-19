import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PortalComponent } from './portal/portal.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {HttpClientModule}  from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './employee-details/edit-employee/edit-employee.component';
import { Route, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavComponent } from './nav/nav.component';
import { GettingStartedComponent } from './employee-details/getting-started/getting-started.component';
import { LeavereqComponent } from './leavereq/leavereq.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'
import{MatInputModule} from '@angular/material/input';
import { LeaveComponent } from './leave/leave.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'
import{Activate} from './guards/authguard';
import { ManageLeaveReqComponent } from './manage-leave-req/manage-leave-req.component'

const approutes:Route[]=[{

path:'',component:LoginComponent,
},
{

  path:'manageLeaveReq',component:ManageLeaveReqComponent,
  },
{

  path:'login',component:LoginComponent,
  },{
path:'employeeDetails',component:EmployeeDetailsComponent,canActivate:[Activate],
},{
  path:'editEmployee',component:EditEmployeeComponent,
},
{
  path:'attendance',component:PortalComponent,
},
{
  path:'getStarted',component:GettingStartedComponent
},
{
  path:'leavereq',component:LeavereqComponent
},
{
  path:'s',component:HeaderComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PortalComponent,
    EmployeeDetailsComponent,
    EditEmployeeComponent,
    WelcomeComponent,
    NavComponent,
    GettingStartedComponent,
    LeavereqComponent,
    LeaveComponent,
    HeaderComponent,
    FooterComponent,
    ManageLeaveReqComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(approutes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }












