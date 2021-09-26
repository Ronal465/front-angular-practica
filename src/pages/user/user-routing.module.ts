import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageListComponent } from 'src/pages/user/user-page-list/user-page-list.component';
import { UserPageEditComponent } from './user-page-edit/user-page-edit.component';

const routes: Routes = [
  { path: 'list', component: UserPageListComponent },
  { path: 'edit/:type', component: UserPageEditComponent },
  { path: 'edit/edit/:id', component: UserPageEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
