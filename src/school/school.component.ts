import { Component } from "@angular/core";

@Component
({
  selector: 'app-school',
  template:
  `
  <form>
    <div class="mb-3">
      <label for="txtName" class="form-label">Nombre</label>
      <input type="text" class="form-control" id="txtName">
    </div>
    <button type="submit" class="btn btn-primary rounded-pill">Ingresar</button>
  </form>
  `
})

export default class SchoolComponent
{
  constructor() {}
}
