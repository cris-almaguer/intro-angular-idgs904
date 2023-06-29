import { OperationsModule } from './school/forms/operations/operations.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import IevnComponent from 'src/school/ievn.component';
import SchoolComponent from 'src/school/school.component';

import { AppComponent } from './app.component';
import { IricComponent } from './school/iric/iric.component';
import { MenuComponent } from './school/menu/menu.component';
import { SumComponent } from './school/forms/sum/sum.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentsFilterPipe } from './school/students-filter.pipe';
import { StudentsGradesComponent } from './school/students-grades/students-grades.component';
import { ReactiveStudentComponent } from './forms/reactive-student/reactive-student.component';


@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    IevnComponent,
    IricComponent,
    MenuComponent,
    SumComponent,
    StudentsFilterPipe,
    StudentsGradesComponent,
    ReactiveStudentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
