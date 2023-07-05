import { ReactiveStudentComponent } from './forms/reactive-student/reactive-student.component';
import { BasicOpComponent } from './school/forms/basic-op/basic-op.component';
import { IricComponent } from './school/iric/iric.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

const routes:Routes =
[
  {
    path: '',
    redirectTo: 'IricComponent',
    pathMatch: 'full'
  },
  {
    path: 'IricComponent',
    component: IricComponent
  },
  {
    path: 'BasicOpComponent',
    component: BasicOpComponent
  },
  {
    path: 'ReactiveStudentComponent',
    component: ReactiveStudentComponent
  }
];

@NgModule
({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
