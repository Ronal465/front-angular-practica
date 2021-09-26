import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { UserSearchModule } from 'src/components/user-search/user-search.module';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [PagesComponent,HomePageComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    UserSearchModule
  ]
})
export class PagesModule { }
