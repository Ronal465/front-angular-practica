import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from 'src/pages/pages.module';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path: '', component: AppComponent, //canActivate: [PermissionGuard],
  children: [
    { path: '', loadChildren: () => PagesModule }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
