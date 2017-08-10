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

module.exports = "<div class=\"appFrame\">\n  <div class=\"htmlTitle\">\n    Angular: Simple Example with Three Sources - Armando Schiavon Dias -\n    <a href=\"mailto:armando.schiavon@gmail.com\">armando.schiavon@gmail.com</a>\n  </div>\n  <div class=\"htmlExplanation\">\n    <div class=\"htmlExplanationBar noselect\" (click)=\"showHideExplanation()\">\n      ( Click here for <strong>{{showHideWord}}</strong> the exercise explanation )\n    </div>\n    <div class=\"htmlExplanationList\" [style.display]=\"showHideStatus\">\n      This is just a example, to show how I code a simple <strong>\"One Page App\"</strong>\n      using <strong>Angular 4</strong>.<br/>\n      You probably found this code through my <strong>CV</strong> or <strong>\n      <a href=\"https://www.linkedin.com/in/armandoschiavondias/\" target=\"_blank\">\n      LinkedIn</a></strong>.<br/><br/>\n      <strong>Mission:</strong> Let's imagine a situation where we have to read files from three\n      different sources. One provides a <strong>XML</strong> file, the second a\n      <strong>JSON</strong> and the last, a simple <strong>CSV</strong> file. We need to load\n      all the files, normalize this data and show the content,\n      being carefully with some rules:<br/>\n      <ul>\n        <li>If there is the same name on different files, presume that is the same fighter.</li>\n        <li>By default, show all fighters in alphabetical order.</li>\n        <li>Option to show fighters by game title.</li>\n        <li>Search by name, case insensitive and of \"%Like%\" kind.</li>\n      </ul>\n      Some points that I keep in mind all the time:<br/>\n      <ul>\n        <li><strong>\n          <a href=\"https://www.cs.helsinki.fi/u/luontola/tdd-2009/ext/ObjectCalisthenics.pdf\"\n          target=\"_blank\">Object Calisthenics</a></strong> ( Always when possible... )</li>\n        <li>I am using <strong>TESlint</strong> ( ESLint for TypeScript Files ):\n          This helps a lot with the code's pattern.</li>\n        <li>I am using <strong>TypeScript</strong> because I choose <strong><a target=\"_blank\" href=\"https://angular.io/\">Angular.io</a></strong> (4.x) and not <strong><a target=\"_blank\" href=\"https://angularjs.org/\">Angularjs.org</a></strong> (1.x).</li>\n      </ul>\n      The files are:<br/>\n      <ul>\n        <li>src/app/<a target=\"_blank\" href=\"https://github.com/ArmandoDias/SimpleAngular4Example/blob/master/src/app/app.module.ts\">app.module.ts</a> (Some changes)</li>\n        <li>src/app/<a target=\"_blank\" href=\"https://github.com/ArmandoDias/SimpleAngular4Example/blob/master/src/app/app.component.ts\">app.component.ts</a> (Some code and explanations)</li>\n        <li>src/app/<a target=\"_blank\" href=\"https://github.com/ArmandoDias/SimpleAngular4Example/blob/master/src/app/app.component.html\">app.component.html</a> (The HTML, the main 'Viewer' of this MVC)</li>\n        <li>src/app/<a target=\"_blank\" href=\"https://github.com/ArmandoDias/SimpleAngular4Example/blob/master/src/app/app.component.css\">app.component.css</a> (Some Style)</li>\n        <li>src/app/pipes/<a target=\"_blank\" href=\"https://github.com/ArmandoDias/SimpleAngular4Example/blob/master/src/app/pipes/filter.pipe.ts\">filter.pipe.ts</a> (Who filter the Fighters when you type something on search)</li>\n        <li>src/app/pipes/<a target=\"_blank\" href=\"https://github.com/ArmandoDias/SimpleAngular4Example/blob/master/src/app/pipes/orderby.pipe.ts\">orderby.pipe.ts</a> (Who put the Fighters' Name or Game Title in alphabetical order)</li>\n        <li>src/app/rosterofchars/<a target=\"_blank\" href=\"https://github.com/ArmandoDias/SimpleAngular4Example/blob/master/src/app/rosterofchars/parseFiles.ts\">parseFiles.ts</a> (Class responsible for parse the three different sources)</li>\n        <li>src/app/rosterofchars/<a target=\"_blank\" href=\"https://github.com/ArmandoDias/SimpleAngular4Example/blob/master/src/app/rosterofchars/rosterofchars.component.css\">rosterofchars.component.css</a> (More Style)</li>\n        <li>src/app/rosterofchars/<a target=\"_blank\" href=\"https://github.com/ArmandoDias/SimpleAngular4Example/blob/master/src/app/rosterofchars/rosterofchars.component.html\">rosterofchars.component.html</a> (HTML used to show the data)</li>\n        <li>src/app/rosterofchars/<a target=\"_blank\" href=\"https://github.com/ArmandoDias/SimpleAngular4Example/blob/master/src/app/rosterofchars/rosterofchars.component.ts\">rosterofchars.component.ts</a> (Class who loads the three files and show the results on screen)</li>\n        <li>src/assets/source-data/<a target=\"_blank\" href=\"https://github.com/ArmandoDias/SimpleAngular4Example/blob/master/src/assets/source-data/bandainamco.xml\">bandainamco.xml</a> (XML with information)</li>\n        <li>src/assets/source-data/<a target=\"_blank\" href=\"https://github.com/ArmandoDias/SimpleAngular4Example/blob/master/src/assets/source-data/capcom.json\">capcom.json</a> (JSON with information)</li>\n        <li>src/assets/source-data/<a target=\"_blank\" href=\"https://github.com/ArmandoDias/SimpleAngular4Example/blob/master/src/assets/source-data/nether-realm.csv\">nether-realm.csv</a> (CSV with information)</li>\n      </ul>\n    </div>\n  </div>\n  <app-rosterofchars></app-rosterofchars>\n</div>"

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rosterofchars_rosterofchars_component__ = __webpack_require__("../../../../../src/app/rosterofchars/rosterofchars.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_orderby_pipe__ = __webpack_require__("../../../../../src/app/pipes/orderby.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_filter_pipe__ = __webpack_require__("../../../../../src/app/pipes/filter.pipe.ts");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__rosterofchars_rosterofchars_component__["a" /* RosterofcharsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pipes_orderby_pipe__["a" /* OrderBy */],
            __WEBPACK_IMPORTED_MODULE_7__pipes_filter_pipe__["a" /* FilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, filterString, propName) {
        if (value.length === 0 || filterString === '') {
            return value;
        }
        var resultArray = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            if (item[propName].toUpperCase().indexOf(filterString.toUpperCase()) > -1) {
                resultArray.push(item);
            }
        }
        return resultArray;
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Pipe */])({
        name: 'filter',
        pure: false
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/orderby.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderBy; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderBy = (function () {
    function OrderBy() {
    }
    OrderBy.prototype.transform = function (array, orderBy, asc) {
        var _this = this;
        if (asc === void 0) { asc = true; }
        if (!orderBy || orderBy.trim() === '') {
            return array;
        }
        if (asc) {
            return Array.from(array).sort(function (item1, item2) {
                return _this.orderByComparator(item1[orderBy], item2[orderBy]);
            });
        }
        if (!asc) {
            return Array.from(array).sort(function (item1, item2) {
                return _this.orderByComparator(item2[orderBy], item1[orderBy]);
            });
        }
    };
    OrderBy.prototype.orderByComparator = function (a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
            }
            if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
            }
            if (parseFloat(a) < parseFloat(b)) {
                return -1;
            }
            if (parseFloat(a) > parseFloat(b)) {
                return 1;
            }
        }
        return 0;
    };
    return OrderBy;
}());
OrderBy = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Pipe */])({
        name: 'orderBy',
        pure: false
    })
], OrderBy);

//# sourceMappingURL=orderby.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/rosterofchars/parseFiles.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParseFiles; });
var ParseFiles = (function () {
    function ParseFiles() {
    }
    ParseFiles.prototype.parseMyData = function (fighters, object, ret) {
        if (object.link.substr((object.link.length - 4), 4) === 'json') {
            this.parseMyJSON(fighters, ret);
            return true;
        }
        if (object.link.substr((object.link.length - 3), 3) === 'xml') {
            this.parseMyXML(fighters, ret);
            return true;
        }
        if (object.link.substr((object.link.length - 3), 3) === 'csv') {
            this.parseMyCSV(fighters, ret);
            return true;
        }
    };
    ParseFiles.prototype.findFighter = function (fighter, newFighterName) {
        return fighter.name === newFighterName;
    };
    ParseFiles.prototype.parseMyJSON = function (fighters, json) {
        var _this = this;
        json.fighters.forEach(function (newFighter) {
            var founded = fighters.find(function (fighter) { return _this.findFighter(fighter, newFighter.name); });
            if (founded) {
                founded['game'] = founded['game'] + ", Street Fighter V";
            }
            if (!(founded)) {
                fighters.push({ name: newFighter.name.trim(), game: 'Street Fighter V' });
            }
        });
    };
    ParseFiles.prototype.parseMyXML = function (fighters, xml) {
        var _this = this;
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(xml, 'text/xml');
        var _loop_1 = function (char) {
            if (xmlDoc.getElementsByTagName('char')[char].nodeName === 'char') {
                var mewFighterName_1 = xmlDoc.getElementsByTagName('char')[char].textContent;
                var founded = fighters.find(function (fighter) { return _this.findFighter(fighter, mewFighterName_1); });
                if (founded) {
                    founded['game'] = founded['game'] + ", Tekken 7";
                }
                if (!(founded)) {
                    fighters.push({ name: mewFighterName_1.trim(), game: 'Tekken 7' });
                }
            }
        };
        for (var char in xmlDoc.getElementsByTagName('char')) {
            _loop_1(char);
        }
    };
    ParseFiles.prototype.parseMyCSV = function (fighters, csv) {
        var _this = this;
        var fightersArray = csv.split(';');
        fightersArray.forEach(function (newFighter) {
            var founded = fighters.find(function (fighter) { return _this.findFighter(fighter, newFighter); });
            if (founded) {
                founded['game'] = founded['game'] + ", Mortal Kombat X";
            }
            if (!(founded)) {
                fighters.push({ name: newFighter.trim(), game: 'Mortal Kombat X' });
            }
        });
    };
    return ParseFiles;
}());

//# sourceMappingURL=parseFiles.js.map

/***/ }),

/***/ "../../../../../src/app/rosterofchars/rosterofchars.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tableStyle {\r\n  max-width:500px;\r\n  min-width:300px;\r\n  margin-left:auto;\r\n  margin-right:auto;\r\n  border: 1px solid #000;\r\n  margin-top:20px;\r\n}\r\n\r\n.tableStyle th {\r\n  font-weight: bold;\r\n  background-color: #CCCCCC;\r\n  padding: 5px 15px 5px 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n.tableStyle td {\r\n  padding: 5px 15px 5px 15px;\r\n}\r\n\r\n.tableStyle tr:hover{\r\n  background-color: #DDDDDD;\r\n}\r\n\r\n.disable-text-selection {\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.filterDiv {\r\n  max-width:400px;\r\n  margin-left:auto;\r\n  margin-right:auto;\r\n  margin-top:20px;\r\n}\r\n\r\n.filterInput {\r\n  margin: 0px 10px 0px 10px;\r\n  padding: 2px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/rosterofchars/rosterofchars.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"filterDiv\">\r\n  Filter&nbsp;by&nbsp;Name:<input class=\"filterInput\" type=\"text\" [(ngModel)]=\"filteredName\"/>\r\n  <button class=\"filterButton\" (click)=\"clearFilter()\">Clear</button>\r\n</div>\r\n<table class=\"tableStyle\">\r\n  <tr class=\"disable-text-selection\">\r\n    <th (click)=\"orderByName()\" >Fighter&nbsp;Name{{directionName}}</th>\r\n    <th (click)=\"orderByGame()\" >Game&nbsp;Title{{directionGame}}</th>\r\n  </tr>\r\n  <tr *ngFor=\"let fighter of fighters | filter:filteredName:'name' | orderBy:orderByThisField:orderByASC\">\r\n    <td>{{fighter.name}}</td>\r\n    <td>{{fighter.game}}</td>\r\n  </tr>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/rosterofchars/rosterofchars.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parseFiles__ = __webpack_require__("../../../../../src/app/rosterofchars/parseFiles.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RosterofcharsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RosterofcharsComponent = (function () {
    function RosterofcharsComponent(http) {
        this.http = http;
    }
    RosterofcharsComponent.prototype.ngOnInit = function () {
        this.fighters = [];
        this.index = 0;
        this.directionName = ' ⤦';
        this.directionGame = '';
        this.orderByThisField = 'name';
        this.orderByASC = true;
        this.parseFiles = new __WEBPACK_IMPORTED_MODULE_2__parseFiles__["a" /* ParseFiles */]();
        this.filteredName = '';
        this.loadNext();
    };
    RosterofcharsComponent.prototype.getData = function (obj) {
        var ts = new Date().getTime();
        return this.http.get("/assets/source-data/" + obj.link + "?ts=" + ts, obj.type);
    };
    RosterofcharsComponent.prototype.loadNext = function () {
        var _this = this;
        var object = {};
        if (this.index === 0) {
            object = { link: 'capcom.json', type: { responseType: 'json' } };
        }
        if (this.index === 1) {
            object = { link: 'bandainamco.xml', type: { responseType: 'text' } };
        }
        if (this.index === 2) {
            object = { link: 'nether-realm.csv', type: { responseType: 'text' } };
        }
        this.getData(object).subscribe(function (ret) {
            _this.parseFiles.parseMyData(_this.fighters, object, ret);
            _this.index += 1;
            if (_this.index < 3) {
                _this.loadNext();
            }
        });
    };
    RosterofcharsComponent.prototype.orderByName = function () {
        if (this.orderByThisField !== 'name') {
            this.orderByASC = true;
            this.directionName = ' ⤦';
            this.directionGame = '';
            this.orderByThisField = 'name';
            return true;
        }
        this.orderByASC = !this.orderByASC;
        this.directionName = this.orderByASC ? ' ⤦' : ' ⤣';
        this.directionGame = '';
        return true;
    };
    RosterofcharsComponent.prototype.orderByGame = function () {
        if (this.orderByThisField !== 'game') {
            this.orderByASC = true;
            this.directionName = '';
            this.directionGame = ' ⤦';
            this.orderByThisField = 'game';
            return true;
        }
        this.orderByASC = !this.orderByASC;
        this.directionName = '';
        this.directionGame = this.orderByASC ? ' ⤦' : ' ⤣';
        return true;
    };
    RosterofcharsComponent.prototype.clearFilter = function () {
        this.filteredName = '';
    };
    return RosterofcharsComponent;
}());
RosterofcharsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-rosterofchars',
        template: __webpack_require__("../../../../../src/app/rosterofchars/rosterofchars.component.html"),
        styles: [__webpack_require__("../../../../../src/app/rosterofchars/rosterofchars.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], RosterofcharsComponent);

var _a;
//# sourceMappingURL=rosterofchars.component.js.map

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