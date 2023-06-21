import { Component } from '@angular/core';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})

export class SumComponent
{
  number1 = '';
  number2 = '';
  result:number = 0;

  sum = () => this.result = parseInt(this.number1) + parseInt(this.number2)
}
