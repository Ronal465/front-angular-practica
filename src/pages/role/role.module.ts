import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolPageEditComponent } from './rol-page-edit/rol-page-edit.component';
import { RolPageListComponent } from './rol-page-list/rol-page-list.component';
import { RoleRoutingModule } from './role-routing.module';
import { RoleEditModule } from 'src/components/role-edit/role-edit.module';
import { RoleListModule } from 'src/components/role-list/role-list.module';

@NgModule({
  declarations: [RolPageEditComponent,RolPageListComponent],
  imports: [
    CommonModule,
    RoleRoutingModule,
    RoleEditModule,
    RoleListModule
  ]
})
export class RoleModule { }
