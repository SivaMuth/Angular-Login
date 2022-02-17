import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserData } from '../model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 userList:Array<UserData> = []

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.userData().subscribe((data) => {
      this.userList = data;
    })
    }
    
  }


