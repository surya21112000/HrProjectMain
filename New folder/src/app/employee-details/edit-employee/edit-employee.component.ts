import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  postForm:FormGroup | any;
  constructor(private http:HttpClient) { }
  onAdd(){
    const postData=this.postForm.value
    console.log(postData);
    
    this.http.post('/api/employeeDetails',postData).subscribe(response=>{
      console.log(response);

    })
  }

  ngOnInit(): void {
    this.postForm= new FormGroup({
      firstname: new FormControl(null,Validators.required),
      secondname: new FormControl(null,Validators.required),
      empID: new FormControl(null,Validators.required),
      mobilenumber: new FormControl(null,Validators.required),
      address: new FormControl(null,Validators.required),
      doj: new FormControl(null,Validators.required),
      dob: new FormControl(null,Validators.required),
      qualification: new FormControl(null,Validators.required),
      salary: new FormControl(null,Validators.required),
      designation: new FormControl(null,Validators.required),
      email:new FormControl(null,Validators.email)


    })
  }

}
