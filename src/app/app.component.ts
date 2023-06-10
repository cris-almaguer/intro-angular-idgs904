import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'intro-angular-idgs904';

  duplicationValue = (value:number) : number => value * 2;

  Student =
  {
    id: 20001468,
    name: 'Daniel',
    birtDate: new Date()
  }
}
