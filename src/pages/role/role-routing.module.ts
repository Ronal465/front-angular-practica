import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolPageEditComponent } from './rol-page-edit/rol-page-edit.component';
import { RolPageListComponent } from './rol-page-list/rol-page-list.component';

const routes: Routes = [
  { path: 'list', component: RolPageListComponent },
  { path: 'edit/:type', component: RolPageEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
