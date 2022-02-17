import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl,FormGroup,Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  
userFormData:any;
isPosting : boolean = false;

  constructor(private userService:UserService,private router:Router) { 
    this.userFormData = new FormGroup({
          'username' : new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
          'email' : new FormControl("",[Validators.required,Validators.email]),
          'phone' : new FormControl("",[Validators.required,Validators.min(6),Validators.max(9999999999), Validators.pattern(/^[6-9]\d*$/) ],),
          'countryCode' : new FormControl(""),
          'country' : new FormControl(),
          'state' : new FormControl(),
          'city' : new FormControl(),
    })
    
  }
  
 
 
  ngOnInit(): void {
  }
  

  /* display = false;
  onPress() {
    this.display = true;
  } */

  postFormData() {
    if (this.userFormData.valid) {
      this.isPosting = true;
      this.userService.createUser(this.userFormData.value).subscribe((data) => {
        this.isPosting = false; 
        this.router.navigate(["/dashboard/user/list"])
      }, (error) => {
        this.isPosting = false;
        alert("Error") })
    }
  }
  

} 
