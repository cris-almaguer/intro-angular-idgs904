import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import IevnComponent from 'src/school/ievn.component';
import SchoolComponent from 'src/school/school.component';

import { AppComponent } from './app.component';
import { IricComponent } from './school/iric/iric.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    IevnComponent,
    IricComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
