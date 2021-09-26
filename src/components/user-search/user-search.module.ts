import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSearchComponent } from './user-search.component';

@NgModule({
  declarations: [UserSearchComponent],
  exports: [UserSearchComponent],
  imports: [
    CommonModule
  ]
})
export class UserSearchModule { }
