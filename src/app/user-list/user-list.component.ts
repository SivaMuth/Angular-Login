import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList:Observable<Array<UserData>> = this.userService.userData();
  now = new Date()
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    // this.fetchData()
  }

  fetchData(){
    // this.userService.userData().subscribe((data) => {
    //   this.userList = data;
    // })
  }

  deleteUser(id:any){
    let confirmRes = confirm("Are you sure do you want to delete?")
    if(confirmRes){
      this.userService.deleteUserById(id).subscribe(() => {
        this.fetchData()
      })
    }
  }

}