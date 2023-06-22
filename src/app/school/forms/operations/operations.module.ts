import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BasicOpComponent } from '../basic-op/basic-op.component';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations:
  [
    BasicOpComponent
  ],
  imports:
  [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatRadioModule
  ],
  exports:
  [
    BasicOpComponent
  ]
})
export class OperationsModule { }
