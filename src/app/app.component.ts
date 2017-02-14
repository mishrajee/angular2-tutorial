import { Component } from '@angular/core';

export class Villain {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>{{villain.name}} details!</h2>
  <div><label>id: </label>{{villain.id}}</div>
  <div>
      <label>name: </label>
      <input [(ngModel)]="villain.name" placeholder="name">
  </div>
  `
})

export class AppComponent  {
  title = 'Tour of Villains';
  villain: Villain = {
    id: 1,
    name: 'Skeletor'
  };
}
