import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserViewComponent } from './user-view/user-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DashboardDataComponent } from './dashboard-data/dashboard-data.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { DashboardDirective } from './dashboard.directive'
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UserComponent,
    DashboardComponent,
    SidebarComponent,
    TopbarComponent,
    UserCreateComponent,
    UserListComponent,
    UserViewComponent,
    LoginComponent,
    DashboardDataComponent,
    UserEditComponent,
    DashboardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
