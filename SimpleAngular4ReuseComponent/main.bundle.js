webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".appFrame {\r\n  margin: 25px;\r\n}\r\n\r\n.htmlTitle {\r\n  background-color: #00C6FF;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  padding: 10px;\r\n}\r\n\r\n.htmlExplanationBar {\r\n  background-color: #0093BD;\r\n  padding: 10px;\r\n  text-align: right;\r\n  cursor: pointer;\r\n}\r\n\r\n.htmlExplanationList {\r\n  background-color: #C4D1D5;\r\n  padding: 10px;\r\n}\r\n\r\na:link {\r\n  color: #006480;\r\n  text-decoration:none;\r\n}\r\n\r\na:visited {\r\n  color: #006480;\r\n  text-decoration:none;\r\n}\r\n\r\na:hover {\r\n  color: #006480;\r\n  text-decoration:underline;\r\n}\r\n\r\na:active {\r\n  color: #006480;\r\n  text-decoration:none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"appFrame\">\n  <div class=\"htmlTitle\">\n    Angular: Reuse Component - Armando Schiavon Dias -\n    <a href=\"mailto:armando.schiavon@gmail.com\">armando.schiavon@gmail.com</a>\n  </div>\n  <div class=\"htmlExplanation\">\n    <div class=\"htmlExplanationBar noselect\" (click)=\"showHideExplanation()\">\n      ( Click here for <strong>{{showHideWord}}</strong> the exercise explanation )\n    </div>\n    <div class=\"htmlExplanationList\" [style.display]=\"showHideStatus\">\n      This is just another example, to show how I code a simple <strong>\"One Page App\"</strong>\n      using <strong>Angular 4</strong>.<br/>\n      You probably found this code through my <strong>CV</strong> or <strong>\n      <a href=\"https://www.linkedin.com/in/armandoschiavondias/\" target=\"_blank\">\n      LinkedIn</a></strong>.<br/><br/>\n      <strong>Mission:</strong> This time, the idea is build a component, reuse it how many times the user need and make it able to exchange data between they.<br/>\n      Let's use <strong><a href=\"https://material.angular.io/\" target=\"_blank\">Material Angular</a></strong> to make it looks nice.<br/>\n      Click on icons to make it work!<br/>\n      This code was created as example purpose.\n      <br/><br/>\n      Some points that I keep in mind all the time:<br/>\n      <ul>\n        <li><strong>\n          <a href=\"https://www.cs.helsinki.fi/u/luontola/tdd-2009/ext/ObjectCalisthenics.pdf\"\n          target=\"_blank\">Object Calisthenics</a></strong> ( Always when possible... )</li>\n          <li>I am using <strong>TypeScript</strong> because I choose <strong><a target=\"_blank\" \n            href=\"https://angular.io/\">Angular.io</a></strong> (4.x) and not <strong>\n            <a target=\"_blank\" href=\"https://angularjs.org/\">Angularjs.org</a></strong> (1.x).</li>\n          <li>I am using <strong>TESlint</strong> ( ESLint for TypeScript Files ):\n          This helps a lot with the code's pattern.</li>\n\n      </ul>\n        The files are:<br/>\n      <ul>\n        <li>src/app/<a target=\"_blank\" href=\"https://github.com/ArmandoDias/SimpleAngular4ReuseComponent/blob/master/src/app/app.module.ts\">app.module.ts</a> (Some changes)</li>\n        <li>src/app/<a target=\"_blank\" href=\"https://github.com/ArmandoDias/SimpleAngular4ReuseComponent/blob/master/src/app/app.component.ts\">app.component.ts</a> (Some code and explanations)</li>\n        <li>src/app/<a target=\"_blank\" href=\"https://github.com/ArmandoDias/SimpleAngular4ReuseComponent/blob/master/src/app/app.component.html\">app.component.html</a> (The HTML, the main 'Viewer' of this MVC)</li>\n        <li>src/app/<a target=\"_blank\" href=\"https://github.com/ArmandoDias/SimpleAngular4ReuseComponent/blob/master/src/app/app.component.css\">app.component.css</a> (Some Style)</li>\n        <li>src/app/control/<a target=\"_blank\" href=\"https://github.com/ArmandoDias/SimpleAngular4ReuseComponent/blob/master/src/app/control/control.component.css\">control.component.css</a> (More Style)</li>\n        <li>src/app/control/<a target=\"_blank\" href=\"https://github.com/ArmandoDias/SimpleAngular4ReuseComponent/blob/master/src/app/control/control.component.html\">control.component.html</a> (HTML of Component where you click to create as many 'teams' you need)</li>\n        <li>src/app/control/<a target=\"_blank\" href=\"https://github.com/ArmandoDias/SimpleAngular4ReuseComponent/blob/master/src/app/control/control.component.ts\">control.component.ts</a> (TypeScript of Component 'replicator'. Very simple...)</li>\n        <li>src/app/control/team/<a target=\"_blank\" href=\"https://github.com/ArmandoDias/SimpleAngular4ReuseComponent/blob/master/src/app/control/team/team.component.css\">team.component.css</a> (More Style)</li>\n        <li>src/app/control/team/<a target=\"_blank\" href=\"https://github.com/ArmandoDias/SimpleAngular4ReuseComponent/blob/master/src/app/control/team/team.component.html\">team.component.html</a> (HTML of each 'team')</li>\n        <li>src/app/control/team/<a target=\"_blank\" href=\"https://github.com/ArmandoDias/SimpleAngular4ReuseComponent/blob/master/src/app/control/team/team.component.ts\">team.component.ts</a> (TypeScript of each 'team'. Here I have Inputs and Outputs to comunication between they...)</li>\n      </ul>\n    </div>\n  </div>\n</div>\n<app-control></app-control>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.showHideStatus = 'none';
        this.showHideWord = 'read';
    }
    AppComponent.prototype.showHideExplanation = function () {
        this.showHideWord = this.showHideStatus === 'none' ? 'hide' : 'read';
        this.showHideStatus = this.showHideStatus === 'none' ? 'block' : 'none';
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__control_control_component__ = __webpack_require__("../../../../../src/app/control/control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__control_team_team_component__ = __webpack_require__("../../../../../src/app/control/team/team.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__control_control_component__["a" /* ControlComponent */],
            __WEBPACK_IMPORTED_MODULE_7__control_team_team_component__["a" /* TeamComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdInputModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/control/control.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".holderDiv {\r\n  width: 90%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  position: relative;\r\n}\r\n\r\n.r-icon {\r\n  position: absolute;\r\n  right: 20px;\r\n  top: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.example-spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.content-area {\r\n  margin-top: 20px;\r\n  padding: 10px;\r\n  overflow-x: scroll;\r\n  height: 400px;\r\n  background-color: #EFEFEF;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/control/control.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"holderDiv\">\n  <md-toolbar color=\"primary\">\n    <span>Team Organizer</span>\n    <div class=\"r-icon noselect\" (click)=\"addTeam()\"><md-icon>note_add</md-icon></div>\n  </md-toolbar>\n  <div class=\"content-area mat-elevation-z8\">\n    <div [style.width.px]=\"teamWidth\">\n      <app-team \n        *ngFor=\"let team of teams; let indexValue = index; let first = first; let last = last;\"\n        [myID]=\"indexValue\"\n        [iAmTheFirst]=\"first\"\n        [iAmTheLast]=\"last\"\n        [teams]=\"teams\"\n        (removeMe)=\"removeThisTeam($event)\"\n        (sendThisToMyLeft)=\"sendToLeft($event)\"\n        (sendThisToMyRight)=\"sendToRight($event)\"\n      ></app-team>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/control/control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ControlComponent = (function () {
    function ControlComponent() {
        this.teamWidth = 0;
        this.teams = [];
    }
    ControlComponent.prototype.ngOnInit = function () { };
    ControlComponent.prototype.addTeam = function () {
        this.teams.push([]);
        this.refreshWidthScroll();
    };
    ControlComponent.prototype.removeThisTeam = function (myID) {
        this.teams.splice(myID, 1);
        this.refreshWidthScroll();
    };
    ControlComponent.prototype.refreshWidthScroll = function () {
        this.teamWidth = this.teams.length * 210;
    };
    ControlComponent.prototype.sendToLeft = function (obj) {
        // This method is here as example
        // of 'Output / EventEmitter' use.
        var to = obj.me - 1;
        var who = obj.who;
        this.teams[to].push(who);
    };
    ControlComponent.prototype.sendToRight = function (obj) {
        // This method is here as example
        // of 'Output / EventEmitter' use.
        var to = obj.me + 1;
        var who = obj.who;
        this.teams[to].push(who);
    };
    return ControlComponent;
}());
ControlComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-control',
        template: __webpack_require__("../../../../../src/app/control/control.component.html"),
        styles: [__webpack_require__("../../../../../src/app/control/control.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ControlComponent);

//# sourceMappingURL=control.component.js.map

/***/ }),

/***/ "../../../../../src/app/control/team/team.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".teamDiv {\r\n  width: 198px;\r\n  height: 378px;\r\n  border: 1px solid #000;\r\n  position: relative;\r\n  display: inline-table;\r\n  margin-right: 10px;\r\n  padding: 0px;\r\n}\r\n\r\n.r-icon {\r\n  position: absolute;\r\n  right: 20px;\r\n  top: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.r-iconAdd {\r\n  position: absolute;\r\n  right: 10px;\r\n  top: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.bodyDIV {\r\n  margin: 10px;\r\n}\r\n\r\n.addPlayerDIV {\r\n  position: relative;\r\n}\r\n\r\n.addPlayerDIVLimit {\r\n  margin-right: 50px;\r\n}\r\n\r\n.playersDIV {\r\n  border: 1px solid #000;\r\n  margin-top: 10px;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n  height: 215px;\r\n}\r\n\r\n.playerItem {\r\n  width: 100%;\r\n  vertical-align: top;\r\n  position: relative;\r\n  height: 39px;\r\n  background-color: #DDD;\r\n  border-bottom: 1px solid #000;\r\n}\r\n\r\n.l-iconSendButton {\r\n  width: 25px;\r\n  display: inline-table;\r\n  padding: 0px;\r\n  min-height: 10px;\r\n  height: 33px;\r\n  position: absolute;\r\n  vertical-align: middle;\r\n}\r\n\r\n.r-iconSendButton {\r\n  width: 25px;\r\n  display: inline-table;\r\n  padding: 0px;\r\n  min-height: 10px;\r\n  height: 33px;\r\n  position: absolute;\r\n  right: 0px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.playersNameDIV {\r\n  display: inline-table;\r\n  font-size: 12px;\r\n  min-height: 20px;\r\n  height: 39px;\r\n  position: absolute;\r\n  left: 25px;\r\n  vertical-align: middle;\r\n  padding: 0px;\r\n  background-color: #FFF;\r\n  color: #000;\r\n}\r\n\r\n.playersNameDIVInside {\r\n  margin-top: 4px;\r\n  margin-left: 5px;\r\n  width: 100px;\r\n}\r\n\r\n.arrowPosition {\r\n  margin-top: 6px;\r\n}\r\n\r\n.myCursor {\r\n  cursor: pointer;\r\n}\r\n\r\n.turnItOff {\r\n  background-color: #666;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/control/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"teamDiv\">\r\n  <md-toolbar color=\"primary\">\r\n    <span class=\"noselect\">Team {{myID}}</span>\r\n    <div class=\"r-icon noselect\" (click)=\"removeThisTeam()\"><md-icon>delete_forever</md-icon></div>\r\n  </md-toolbar>\r\n  <div class=\"bodyDIV\">\r\n    <div class=\"addPlayerDIV\">\r\n      <div class=\"addPlayerDIVLimit\">\r\n        <md-input-container class=\"example-full-width\">\r\n          <input mdInput [(ngModel)]=\"nplayer\" #nplayerinput maxlength=\"10\" placeholder=\"New Player\" [ngClass]=\"'focusOnMe' + myID\">\r\n          <md-hint align=\"end\">{{nplayerinput.value.length}} / 10</md-hint>\r\n        </md-input-container>\r\n      </div>\r\n      <div (click)=\"createPlayer()\" class=\"r-iconAdd noselect\"><md-icon>note_add</md-icon></div>\r\n    </div>\r\n    <div class=\"playersDIV\">\r\n      <div class=\"playerItem\" *ngFor=\"let player of teams[myID]; let indexValue = index;\">\r\n        <div (click)=\"sendToLeft(indexValue)\" [ngClass]=\"iAmTheFirst?'turnItOff':'myCursor'\" class=\"l-iconSendButton noselect mat-toolbar mat-primary\">\r\n          <md-icon class=\"arrowPosition\">keyboard_arrow_left</md-icon>\r\n        </div>\r\n        <div class=\"mat-toolbar mat-primary playersNameDIV\">\r\n          <div class=\"playersNameDIVInside\">{{player}}</div>\r\n        </div>\r\n        <div (click)=\"sendToRight(indexValue)\" [ngClass]=\"iAmTheLast?'turnItOff':'myCursor'\" class=\"r-iconSendButton noselect mat-toolbar mat-primary\">\r\n          <md-icon class=\"arrowPosition\">keyboard_arrow_right</md-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/control/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamComponent = (function () {
    function TeamComponent() {
        this.removeMe = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* EventEmitter */]();
        this.sendThisToMyLeft = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* EventEmitter */]();
        this.sendThisToMyRight = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* EventEmitter */]();
        this.nplayer = '';
    }
    TeamComponent.prototype.ngOnInit = function () { };
    TeamComponent.prototype.createPlayer = function () {
        var playerToCreate = this.nplayer.trim();
        if (playerToCreate.length > 0) {
            this.nplayer = '';
            this.teams[this.myID].push(playerToCreate);
            return true;
        }
        var inputField = document.querySelectorAll(".focusOnMe" + this.myID)[0];
        inputField.focus();
    };
    TeamComponent.prototype.removeThisTeam = function () {
        if (this.myID >= 0) {
            var tempID = this.myID;
            this.myID = -1;
            this.removeMe.emit(tempID);
        }
    };
    TeamComponent.prototype.sendToLeft = function (indexValue) {
        if (!this.iAmTheFirst) {
            this.sendThisToMyLeft.emit({ me: this.myID, who: this.teams[this.myID][indexValue] });
            this.teams[this.myID].splice(indexValue, 1);
        }
    };
    TeamComponent.prototype.sendToRight = function (indexValue) {
        if (!this.iAmTheLast) {
            this.sendThisToMyRight.emit({ me: this.myID, who: this.teams[this.myID][indexValue] });
            this.teams[this.myID].splice(indexValue, 1);
        }
    };
    return TeamComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(),
    __metadata("design:type", Number)
], TeamComponent.prototype, "myID", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(),
    __metadata("design:type", Object)
], TeamComponent.prototype, "iAmTheFirst", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(),
    __metadata("design:type", Object)
], TeamComponent.prototype, "iAmTheLast", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(),
    __metadata("design:type", Object)
], TeamComponent.prototype, "teams", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Output */])(),
    __metadata("design:type", Object)
], TeamComponent.prototype, "removeMe", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Output */])(),
    __metadata("design:type", Object)
], TeamComponent.prototype, "sendThisToMyLeft", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Output */])(),
    __metadata("design:type", Object)
], TeamComponent.prototype, "sendThisToMyRight", void 0);
TeamComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-team',
        template: __webpack_require__("../../../../../src/app/control/team/team.component.html"),
        styles: [__webpack_require__("../../../../../src/app/control/team/team.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TeamComponent);

//# sourceMappingURL=team.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map