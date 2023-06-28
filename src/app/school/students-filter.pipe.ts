import { Pipe, PipeTransform } from '@angular/core';
import IricStudents from './interfaces/iricstudents-interface';

@Pipe({
  name: 'studentsFilter'
})
export class StudentsFilterPipe implements PipeTransform
{
  transform(value: IricStudents[], args: string):IricStudents[]
  {
    let filter:string = args ? args.toLocaleLowerCase() : '';
    return filter ? value.filter((student: IricStudents) => student.name.toLocaleLowerCase().indexOf(filter) != -1) : value;
  }
}
