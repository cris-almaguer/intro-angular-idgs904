import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-students-grades',
  templateUrl: './students-grades.component.html',
  styleUrls: ['./students-grades.component.css']
})
export class StudentsGradesComponent
{
  @Input()
  grades:number = 3;
  starWidth!:number;

  ngOnChange = () : void =>
  {
    this.starWidth = this.grades * 76 / 10;

  }
}
