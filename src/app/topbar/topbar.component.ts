import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }

  logout(){
    window.localStorage.removeItem("app_token");
    this.router.navigate(["/login"])
  }
}
