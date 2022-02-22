import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css'],
})
export class UserViewComponent implements OnInit {
  currentUserId: string = '';
  isLoading: boolean = true;
  userData: UserData | any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private userservice: UserService
  ) {
    this.activatedRoute.params.subscribe((data) => {
      this.currentUserId = data['id'];
      this.userservice.userById(this.currentUserId).subscribe((data) => {
        this.userData = data;
      });
    });
  }

  ngOnInit(): void {}
}
