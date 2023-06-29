import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-students-grades',
  templateUrl: './students-grades.component.html',
  styleUrls: ['./students-grades.component.css']
})
export class StudentsGradesComponent
{
  @Input() grades:number = 3;

  @Output() gradesClick:EventEmitter<string> = new EventEmitter();

  starWidth!:number;

  ngOnChanges()
  {
    this.starWidth = this.grades * 76 / 10;
  }

  onClick = () : void => this.gradesClick.emit(`${this.grades}`);
}
