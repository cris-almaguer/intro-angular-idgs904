import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-student',
  templateUrl: './reactive-student.component.html',
  styleUrls: ['./reactive-student.component.css']
})
export class ReactiveStudentComponent
{
  studentForm!:FormGroup;

  constructor(private readonly fb: FormBuilder)
  {
    this.studentForm = this.initForm();
  }

  onSubmit() : void
  {
    this.getData();
  }

  getData = () =>
  {
    const id = this.studentForm.get('inputId')?.value;
    console.log(`Matricula: ${id}`);

    const name = this.studentForm.get('inputName')?.value;
    console.log(`Nombre: ${name}`);
  }

  initForm = () =>
  {
    return this.fb.group
    (
      {
        inputId: ['', [Validators.required, Validators.minLength(5)]],
        inputName: ['', [Validators.required, Validators.minLength(4)]],
        inputAge: ['', [Validators.required]],
        inputEmail: ['', [Validators.required]],
        inputPhoto: [''],
        inputGrade: ['', [Validators.required]],
      }
    );
  }
}
