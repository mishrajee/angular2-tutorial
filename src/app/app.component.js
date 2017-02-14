"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Villain = (function () {
    function Villain() {
    }
    return Villain;
}());
exports.Villain = Villain;
var VILLAINS = [
    { id: 1, name: 'Skeletor' },
    { id: 2, name: 'Don Karnage' },
    { id: 3, name: 'Beagle Boys' },
    { id: 4, name: 'Bane' },
    { id: 5, name: 'Joker' },
    { id: 6, name: 'Doctor Jackal' },
    { id: 7, name: 'Kapala' },
    { id: 9, name: 'Kilvish' },
    { id: 10, name: 'Aniken Skywalker' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Villains';
        this.villains = VILLAINS;
    }
    AppComponent.prototype.onSelect = function (villain) {
        this.selectedVillain = villain;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .villains {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .villains li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .villains li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .villains li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .villains .text {\n    position: relative;\n    top: -3px;\n  }\n  .villains .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"],
            template: "\n  <h1>{{title}}</h1>\n  <h2>My Villains</h2>\n  <ul class=\"villains\">\n    <li *ngFor=\"let villain of villains\"\n      (click)=\"onSelect(villain)\"\n      [class.selected]=\"villain === selectedVillain\"\n      >\n      <span class=\"badge\">{{villain.id}}</span> {{villain.name}}\n    </li>\n  </ul>\n\n  <div *ngIf=\"selectedVillain\">\n    <h2>{{selectedVillain.name}} details!</h2>\n    <div><label>id: </label>{{selectedVillain.id}}</div>\n    <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"selectedVillain.name\" placeholder=\"name\"/>\n    </div>\n  </div>\n\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map