import { Component } from '@angular/core';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})

export class IricComponent
{
  students:any[] =
  [
    {
      "id": 20008765,
      'name': 'Dana Vazquez',
      'age': 23,
      'email': 'dvazquez@utleon.edu.mx',
      'payInscription': 2214.11,
      'photo': 'https://api.acadium.com/u/6dgp8rwp5/100007319825'
    },
    {
      "id": 20009067,
      'name': 'Angel Mena',
      'age': 27,
      'email': 'amena@utleon.edu.mx',
      'payInscription': 2214.11,
      'photo': 'https://images.genius.com/70d15c90aefdfac2b9b4f622adbc97bb.320x320x1.jpg'
    },
    {
      "id": 20009090,
      'name': 'Jasmin Alcocer',
      'age': 20,
      'email': 'jalcocer@utleon.edu.mx',
      'payInscription': 2214.11,
      'photo': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuO0rxanFnEBkkQGwT0pdgdVXZY7_OSShbtUytDsoEyZbGDxBfF1Iwk_lCKvYnTs7vS_o&usqp=CAU'
    }
  ]
}
