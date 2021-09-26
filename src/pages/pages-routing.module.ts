import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { UserModule } from './user/user.module';
import { HomePageComponent } from './home-page/home-page.component';
import { RoleModule } from './role/role.module';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      { path: 'user', loadChildren: () => UserModule},
      { path: 'role', loadChildren: () => RoleModule},
      { path: '', component: HomePageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
