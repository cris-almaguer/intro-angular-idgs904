import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-op',
  templateUrl: './basic-op.component.html',
  styleUrls: ['./basic-op.component.css']
})
export class BasicOpComponent
{
  number1!:number;
  number2!:number;
  result!:number;
  selectedOperation:string = 'Sum';

  typeOperations =
  [
    'Sum',
    'Substract',
    'Multiplication',
    'Divide'
  ]

  calculate = () =>
  {
    switch (this.selectedOperation)
    {
      case 'Sum':
        this.result = this.number1 + this.number2;
        break;
      case 'Substract':
        this.result = this.number1 - this.number2;
        break;
      case 'Multiplication':
        this.result = this.number1 * this.number2;
        break;
      case 'Division':
        this.result = this.number1 / this.number2;
        break;
    }
  }
}
