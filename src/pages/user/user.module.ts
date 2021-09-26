import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserEditModule } from 'src/components/user-edit/user-edit.module';
import { UserPageListComponent } from './user-page-list/user-page-list.component';
import { UserPageEditComponent } from './user-page-edit/user-page-edit.component';
import { UserListModule } from 'src/components/user-list/user-list.module';

@NgModule({
  declarations: [UserPageListComponent,UserPageEditComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    UserEditModule,
    UserListModule
  ]
})
export class UserModule { }
