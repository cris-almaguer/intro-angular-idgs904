import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import IevnComponent from 'src/school/ievn.component';
import SchoolComponent from 'src/school/school.component';

import { AppComponent } from './app.component';
import { IricComponent } from './school/iric/iric.component';
import { MenuComponent } from './school/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    IevnComponent,
    IricComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
