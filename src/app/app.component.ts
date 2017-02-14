import { Component } from '@angular/core';

export class Villain {
  id: number;
  name: string;
}

const VILLAINS: Villain[] = [
  {id: 1, name: 'Skeletor'},
  {id: 2, name: 'Don Karnage'},
  {id: 3, name: 'Beagle Boys'},
  {id: 4, name: 'Bane'},
  {id: 5, name: 'Joker'},
  {id: 6, name: 'Doctor Jackal'},
  {id: 7, name: 'Kapala'},
  {id: 9, name: 'Kilvish'},
  {id: 10, name: 'Aniken Skywalker'}
];

@Component({
  selector: 'my-app',
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .villains {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .villains li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .villains li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .villains li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .villains .text {
    position: relative;
    top: -3px;
  }
  .villains .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
  template: `
  <h1>{{title}}</h1>
  <h2>My Villains</h2>
  <ul class="villains">
    <li *ngFor="let villain of villains"
      (click)="onSelect(villain)"
      [class.selected]="villain === selectedVillain"
      >
      <span class="badge">{{villain.id}}</span> {{villain.name}}
    </li>
  </ul>

  <div *ngIf="selectedVillain">
    <h2>{{selectedVillain.name}} details!</h2>
    <div><label>id: </label>{{selectedVillain.id}}</div>
    <div>
        <label>name: </label>
        <input [(ngModel)]="selectedVillain.name" placeholder="name"/>
    </div>
  </div>

  `
})

export class AppComponent  {
  title = 'Tour of Villains';
  villains = VILLAINS;
  selectedVillain: Villain;
  
  onSelect(villain: Villain): void{
    this.selectedVillain = villain;
  }
}
