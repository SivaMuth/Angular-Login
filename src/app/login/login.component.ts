import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  constructor(private userService:UserService,private router:Router) {
    this.loginForm = new FormGroup({
      'email' : new FormControl(''),
      'password' : new FormControl('')
    })
   }

  ngOnInit(): void {
  }

  login(){
    if(this.loginForm.valid){
      this.userService.login(this.loginForm.value).subscribe((data: { token: string; }) => {
        console.log(data)
        window.localStorage.setItem("app_token",data.token)
          this.router.navigate(["/dashboard"])
        // Store the Token in Local storage
        // Redirect him to Dashboard
      })
    }
 }

}
 