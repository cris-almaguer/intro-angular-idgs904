import { Component } from "@angular/core";

@Component
({
  selector: 'app-ievn',
  template:
  `
  <h2 class="display-6 fw-bold">Alumno IEVN</h2>
  <div>
    <div>
      <h3 class="fs-5"><b>Matricula:</b> {{ StudentIEVN.id }}</h3>
    </div>
    <div>
      <h3 class="fs-5"><b>Nombre:</b> {{ StudentIEVN.name }}</h3>
    </div>
    <div>
      <h3 class="fs-5"><b>Fecha de Nacimiento:</b> {{ StudentIEVN.birtDate | date }}</h3>
    </div>
    <div>
      <h3 class="fs-5"><b>Pago de inscripci&oacute;n:</b> {{ StudentIEVN.payInscription  | currency }}</h3>
    </div>
  </div>
  `
})

export default class IevnComponent
{
  constructor() {}

  StudentIEVN =
  {
    id: 20001982,
    name: 'Sofía Padilla',
    birtDate: new Date(),
    payInscription: 2214
  }
}
