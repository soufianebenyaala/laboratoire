import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberFormComponent } from './member-form/member-form.component';

const routes: Routes = [
  {
    path:'members',
    component :MemberListComponent,
  },
  {
    path:'from',
    component :MemberFormComponent,
  },
  {
    path:'',
    component :MemberListComponent,
  },
  {
    path:'**',
    component :MemberListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
