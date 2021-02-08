(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/UTX":
/*!***************************************************!*\
  !*** ./src/app/app-shell/grid-1/grid-1.module.ts ***!
  \***************************************************/
/*! exports provided: Grid1Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid1Module", function() { return Grid1Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _grid_1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid-1.component */ "V/Kx");
/* harmony import */ var _grid_1_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid-1-routing.module */ "522c");
/* harmony import */ var _grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid-item/grid-item.component */ "t5nQ");
/* harmony import */ var _shared_warning_message_warning_message_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/warning-message/warning-message.module */ "eP5d");







var Grid1Module = /** @class */ (function () {
    function Grid1Module() {
    }
    Grid1Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Grid1Module });
    Grid1Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Grid1Module_Factory(t) { return new (t || Grid1Module)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_warning_message_warning_message_module__WEBPACK_IMPORTED_MODULE_5__["WarningMessageModule"],
                _grid_1_routing_module__WEBPACK_IMPORTED_MODULE_3__["Grid1RoutingModule"]
            ]] });
    return Grid1Module;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Grid1Module, { declarations: [_grid_1_component__WEBPACK_IMPORTED_MODULE_2__["Grid1Component"], _grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_4__["GridItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_warning_message_warning_message_module__WEBPACK_IMPORTED_MODULE_5__["WarningMessageModule"],
        _grid_1_routing_module__WEBPACK_IMPORTED_MODULE_3__["Grid1RoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Grid1Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_grid_1_component__WEBPACK_IMPORTED_MODULE_2__["Grid1Component"], _grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_4__["GridItemComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_warning_message_warning_message_module__WEBPACK_IMPORTED_MODULE_5__["WarningMessageModule"],
                    _grid_1_routing_module__WEBPACK_IMPORTED_MODULE_3__["Grid1RoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Medialab\myApp\myApp\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "23ZL":
/*!*********************************************************!*\
  !*** ./src/app/app-shell/blank/blank-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: BlankRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankRoutingModule", function() { return BlankRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _blank_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blank.component */ "lQT+");





var routes = [
    {
        path: '',
        component: _blank_component__WEBPACK_IMPORTED_MODULE_2__["BlankComponent"]
    }
];
var BlankRoutingModule = /** @class */ (function () {
    function BlankRoutingModule() {
    }
    BlankRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BlankRoutingModule });
    BlankRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BlankRoutingModule_Factory(t) { return new (t || BlankRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return BlankRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlankRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "522c":
/*!***********************************************************!*\
  !*** ./src/app/app-shell/grid-1/grid-1-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: Grid1RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid1RoutingModule", function() { return Grid1RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _grid_1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid-1.component */ "V/Kx");





var routes = [
    {
        path: '',
        component: _grid_1_component__WEBPACK_IMPORTED_MODULE_2__["Grid1Component"]
    }
];
var Grid1RoutingModule = /** @class */ (function () {
    function Grid1RoutingModule() {
    }
    Grid1RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Grid1RoutingModule });
    Grid1RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Grid1RoutingModule_Factory(t) { return new (t || Grid1RoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return Grid1RoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Grid1RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Grid1RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "8iA4":
/*!************************************************!*\
  !*** ./src/app/app-shell/grid/grid.service.ts ***!
  \************************************************/
/*! exports provided: GridService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridService", function() { return GridService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");







var GridService = /** @class */ (function () {
    function GridService(http) {
        this.http = http;
        this.listUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].endpoint.grid;
    }
    // see https://angular.io/guide/http#getting-error-details
    GridService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    GridService.prototype.getGridItems = function () {
        return this.http
            .get(this.listUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    GridService.ɵfac = function GridService_Factory(t) { return new (t || GridService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    GridService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GridService, factory: GridService.ɵfac, providedIn: 'root' });
    return GridService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
/* Features of development mode in Angular include:
 * an additional change detection cycle
 * printing out hints when the HTML sanitizer is stripping content
 * running deep object comparison checks to detect model changes
 */
var environment = {
    production: false,
    endpoint: {
        grid: '/api/grid',
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "GfJL":
/*!*********************************************************************!*\
  !*** ./src/app/shared/warning-message/warning-message.component.ts ***!
  \*********************************************************************/
/*! exports provided: WarningMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningMessageComponent", function() { return WarningMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var WarningMessageComponent = /** @class */ (function () {
    function WarningMessageComponent() {
        this.open = false;
        this.text = '';
        this.warningMessageOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    WarningMessageComponent.prototype.ngOnInit = function () { };
    WarningMessageComponent.prototype.onWarningClose = function () {
        this.text = '';
        this.open = false;
        this.warningMessageOpen.emit(this.open);
    };
    WarningMessageComponent.ɵfac = function WarningMessageComponent_Factory(t) { return new (t || WarningMessageComponent)(); };
    WarningMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WarningMessageComponent, selectors: [["app-warning-message"]], inputs: { text: "text" }, outputs: { warningMessageOpen: "warningMessageOpen" }, decls: 5, vars: 1, consts: [["role", "alert", 1, "alert", "alert-warning", "ml-3", "warningPosition"], ["aria-label", "Close", 1, "close", "ml-2", 3, "click"], ["aria-hidden", "true"]], template: function WarningMessageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WarningMessageComponent_Template_button_click_2_listener() { return ctx.onWarningClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", ctx.text, "\n");
        } }, styles: [".warningPosition[_ngcontent-%COMP%] {\r\n    position: fixed !important;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1030;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3dhcm5pbmctbWVzc2FnZS93YXJuaW5nLW1lc3NhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixTQUFTO0lBQ1QsT0FBTztJQUNQLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93YXJuaW5nLW1lc3NhZ2Uvd2FybmluZy1tZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2FybmluZ1Bvc2l0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDEwMzA7XHJcbiAgfVxyXG4gIFxyXG4iXX0= */"] });
    return WarningMessageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WarningMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-warning-message',
                templateUrl: './warning-message.component.html',
                styleUrls: ['./warning-message.component.css']
            }]
    }], function () { return []; }, { text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], warningMessageOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "KcXe":
/*!*************************************************!*\
  !*** ./src/app/app-shell/blank/blank.module.ts ***!
  \*************************************************/
/*! exports provided: BlankModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankModule", function() { return BlankModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _blank_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blank.component */ "lQT+");
/* harmony import */ var _blank_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blank-routing.module */ "23ZL");





var BlankModule = /** @class */ (function () {
    function BlankModule() {
    }
    BlankModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BlankModule });
    BlankModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BlankModule_Factory(t) { return new (t || BlankModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _blank_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlankRoutingModule"]
            ]] });
    return BlankModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlankModule, { declarations: [_blank_component__WEBPACK_IMPORTED_MODULE_2__["BlankComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _blank_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlankRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_blank_component__WEBPACK_IMPORTED_MODULE_2__["BlankComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _blank_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlankRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "LdEJ":
/*!****************************************!*\
  !*** ./src/app/service.interceptor.ts ***!
  \****************************************/
/*! exports provided: ServiceInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceInterceptor", function() { return ServiceInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var ServiceInterceptor = /** @class */ (function () {
    function ServiceInterceptor() {
    }
    ServiceInterceptor.prototype.intercept = function (req, next) {
        // WTS TODO: You can personalize your http interception (token for login, handle errors, redirections, loggers ...)
        // More information in:
        // https://angular.io/api/common/http/HttpInterceptor
        // https://blog.angulartraining.com/http-interceptors-in-angular-61dcf80b6bdd
        return next.handle(req);
    };
    ServiceInterceptor.ɵfac = function ServiceInterceptor_Factory(t) { return new (t || ServiceInterceptor)(); };
    ServiceInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServiceInterceptor, factory: ServiceInterceptor.ɵfac, providedIn: 'root' });
    return ServiceInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_shell_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-shell/nav-bar/nav-bar.component */ "etk6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_shell_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-shell/footer/footer.component */ "zx7w");






// declare var $: any;
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'myApp';
    }
    AppComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__('#test').click(function () {
            alert('Wass up!');
        });
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        } }, directives: [_app_shell_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _app_shell_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["html[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    min-height: 100%;\r\n  }\r\n  \r\n  footer[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 160px; \r\n    background-color: #f5f5f5;\r\n  }\r\n  \r\n  \r\n  \r\n  .btn-primary[_ngcontent-%COMP%] {\r\n    background-color: #025fce !important;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:active {\r\n    outline: none !important;\r\n    box-shadow: none !important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsYUFBYSxFQUFFLDRDQUE0QztJQUMzRCx5QkFBeUI7RUFDM0I7O0VBRUEsK0JBQStCOztFQUUvQjtJQUNFLG9DQUFvQztFQUN0Qzs7RUFFQTs7SUFFRSx3QkFBd0I7SUFDeEIsMkJBQTJCO0VBQzdCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIGZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTYwcHg7IC8qIFNldCB0aGUgZml4ZWQgaGVpZ2h0IG9mIHRoZSBmb290ZXIgaGVyZSAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICB9XHJcbiAgXHJcbiAgLyogT3ZlcnJpZGUgQm9vdHN0cmFwIFN0eWxpbmcgKi9cclxuICBcclxuICAuYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyNWZjZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBidXR0b246Zm9jdXMsXHJcbiAgYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4iXX0= */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "V/Kx":
/*!******************************************************!*\
  !*** ./src/app/app-shell/grid-1/grid-1.component.ts ***!
  \******************************************************/
/*! exports provided: Grid1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid1Component", function() { return Grid1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _grid_1_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid-1.service */ "cbZq");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid-item/grid-item.component */ "t5nQ");
/* harmony import */ var _shared_warning_message_warning_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/warning-message/warning-message.component */ "GfJL");









function Grid1Component_app_grid_item_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-grid-item", 6);
} if (rf & 2) {
    var gridItem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gridItem", gridItem_r2);
} }
function Grid1Component_app_warning_message_8_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-warning-message", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("warningMessageOpen", function Grid1Component_app_warning_message_8_Template_app_warning_message_warningMessageOpen_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.handleWarningClose($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx_r1.warningMessageText);
} }
var Grid1Component = /** @class */ (function () {
    function Grid1Component(gridService) {
        this.gridService = gridService;
        this.greyBoxUrl = '../../../assets/GreyBox.svg';
        this.warningMessageText = '';
        this.warningMessageOpen = false;
    }
    Grid1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.gridItems$ = this.gridService.getGridItems().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.warningMessageText = "Request to get grid text failed: " + error;
            _this.warningMessageOpen = true;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    };
    Grid1Component.prototype.handleWarningClose = function (open) {
        this.warningMessageOpen = open;
        this.warningMessageText = '';
    };
    Grid1Component.ɵfac = function Grid1Component_Factory(t) { return new (t || Grid1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_grid_1_service__WEBPACK_IMPORTED_MODULE_1__["Grid1Service"])); };
    Grid1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Grid1Component, selectors: [["app-grid"]], decls: 9, vars: 4, consts: [["id", "mainContent"], [1, "container"], [1, "row", "justify-content-center", "py-5"], [1, "row", "justify-content-around", "text-center", "pb-5"], ["class", "col-4 p-5", 3, "gridItem", 4, "ngFor", "ngForOf"], [3, "text", "warningMessageOpen", 4, "ngIf"], [1, "col-4", "p-5", 3, "gridItem"], [3, "text", "warningMessageOpen"]], template: function Grid1Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Grid1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Grid1Component_app_grid_item_6_Template, 1, 1, "app-grid-item", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Grid1Component_app_warning_message_8_Template, 1, 1, "app-warning-message", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, ctx.gridItems$));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.warningMessageOpen);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_5__["GridItemComponent"], _shared_warning_message_warning_message_component__WEBPACK_IMPORTED_MODULE_6__["WarningMessageComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".header[_ngcontent-%COMP%] {\r\n    background-color: #cecece;\r\n    padding-top: 7rem;\r\n    padding-bottom: 7rem;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLXNoZWxsL2dyaWQtMS9ncmlkLTEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXBwLXNoZWxsL2dyaWQtMS9ncmlkLTEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcclxuICAgIHBhZGRpbmctdG9wOiA3cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDdyZW07XHJcbiAgfVxyXG4gIFxyXG4iXX0= */"] });
    return Grid1Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Grid1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid',
                templateUrl: './grid-1.component.html',
                styleUrls: ['./grid-1.component.css']
            }]
    }], function () { return [{ type: _grid_1_service__WEBPACK_IMPORTED_MODULE_1__["Grid1Service"] }]; }, null); })();


/***/ }),

/***/ "Y+zW":
/*!*****************************************************!*\
  !*** ./src/app/app-shell/blank-1/blank-1.module.ts ***!
  \*****************************************************/
/*! exports provided: Blank1Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blank1Module", function() { return Blank1Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _blank_1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blank-1.component */ "YAMX");
/* harmony import */ var _blank_1_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blank-1-routing.module */ "t0WS");





var Blank1Module = /** @class */ (function () {
    function Blank1Module() {
    }
    Blank1Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Blank1Module });
    Blank1Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Blank1Module_Factory(t) { return new (t || Blank1Module)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _blank_1_routing_module__WEBPACK_IMPORTED_MODULE_3__["Blank1RoutingModule"]
            ]] });
    return Blank1Module;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Blank1Module, { declarations: [_blank_1_component__WEBPACK_IMPORTED_MODULE_2__["Blank1Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _blank_1_routing_module__WEBPACK_IMPORTED_MODULE_3__["Blank1RoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Blank1Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_blank_1_component__WEBPACK_IMPORTED_MODULE_2__["Blank1Component"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _blank_1_routing_module__WEBPACK_IMPORTED_MODULE_3__["Blank1RoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "YAMX":
/*!********************************************************!*\
  !*** ./src/app/app-shell/blank-1/blank-1.component.ts ***!
  \********************************************************/
/*! exports provided: Blank1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blank1Component", function() { return Blank1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var Blank1Component = /** @class */ (function () {
    function Blank1Component() {
    }
    Blank1Component.prototype.ngOnInit = function () { };
    Blank1Component.ɵfac = function Blank1Component_Factory(t) { return new (t || Blank1Component)(); };
    Blank1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Blank1Component, selectors: [["app-blank"]], decls: 5, vars: 0, consts: [["id", "mainContent"], [1, "container"], [1, "row", "justify-content-center", "py-5"]], template: function Blank1Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Blank1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1zaGVsbC9ibGFuay0xL2JsYW5rLTEuY29tcG9uZW50LmNzcyJ9 */"] });
    return Blank1Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Blank1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blank',
                templateUrl: './blank-1.component.html',
                styleUrls: ['./blank-1.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_shell_blank_1_blank_1_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-shell/blank-1/blank-1.module */ "Y+zW");
/* harmony import */ var _app_shell_grid_1_grid_1_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-shell/grid-1/grid-1.module */ "/UTX");
/* harmony import */ var _app_shell_grid_grid_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-shell/grid/grid.module */ "cXnt");
/* harmony import */ var _app_shell_blank_blank_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-shell/blank/blank.module */ "KcXe");
/* harmony import */ var _app_shell_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-shell/nav-bar/nav-bar.component */ "etk6");
/* harmony import */ var _app_shell_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-shell/footer/footer.component */ "zx7w");
/* harmony import */ var _service_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service.interceptor */ "LdEJ");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                useClass: _service_interceptor__WEBPACK_IMPORTED_MODULE_11__["ServiceInterceptor"],
                multi: true
            }
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _app_shell_blank_1_blank_1_module__WEBPACK_IMPORTED_MODULE_5__["Blank1Module"],
                _app_shell_grid_1_grid_1_module__WEBPACK_IMPORTED_MODULE_6__["Grid1Module"],
                _app_shell_grid_grid_module__WEBPACK_IMPORTED_MODULE_7__["GridModule"],
                _app_shell_blank_blank_module__WEBPACK_IMPORTED_MODULE_8__["BlankModule"],
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _app_shell_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavBarComponent"], _app_shell_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _app_shell_blank_1_blank_1_module__WEBPACK_IMPORTED_MODULE_5__["Blank1Module"],
        _app_shell_grid_1_grid_1_module__WEBPACK_IMPORTED_MODULE_6__["Grid1Module"],
        _app_shell_grid_grid_module__WEBPACK_IMPORTED_MODULE_7__["GridModule"],
        _app_shell_blank_blank_module__WEBPACK_IMPORTED_MODULE_8__["BlankModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _app_shell_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavBarComponent"], _app_shell_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _app_shell_blank_1_blank_1_module__WEBPACK_IMPORTED_MODULE_5__["Blank1Module"],
                    _app_shell_grid_1_grid_1_module__WEBPACK_IMPORTED_MODULE_6__["Grid1Module"],
                    _app_shell_grid_grid_module__WEBPACK_IMPORTED_MODULE_7__["GridModule"],
                    _app_shell_blank_blank_module__WEBPACK_IMPORTED_MODULE_8__["BlankModule"],
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                        useClass: _service_interceptor__WEBPACK_IMPORTED_MODULE_11__["ServiceInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cXnt":
/*!***********************************************!*\
  !*** ./src/app/app-shell/grid/grid.module.ts ***!
  \***********************************************/
/*! exports provided: GridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridModule", function() { return GridModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid.component */ "jpVd");
/* harmony import */ var _grid_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid-routing.module */ "iEA7");
/* harmony import */ var _grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid-item/grid-item.component */ "iNuk");
/* harmony import */ var _shared_warning_message_warning_message_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/warning-message/warning-message.module */ "eP5d");







var GridModule = /** @class */ (function () {
    function GridModule() {
    }
    GridModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GridModule });
    GridModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GridModule_Factory(t) { return new (t || GridModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_warning_message_warning_message_module__WEBPACK_IMPORTED_MODULE_5__["WarningMessageModule"],
                _grid_routing_module__WEBPACK_IMPORTED_MODULE_3__["GridRoutingModule"]
            ]] });
    return GridModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GridModule, { declarations: [_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], _grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_4__["GridItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_warning_message_warning_message_module__WEBPACK_IMPORTED_MODULE_5__["WarningMessageModule"],
        _grid_routing_module__WEBPACK_IMPORTED_MODULE_3__["GridRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], _grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_4__["GridItemComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_warning_message_warning_message_module__WEBPACK_IMPORTED_MODULE_5__["WarningMessageModule"],
                    _grid_routing_module__WEBPACK_IMPORTED_MODULE_3__["GridRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "cbZq":
/*!****************************************************!*\
  !*** ./src/app/app-shell/grid-1/grid-1.service.ts ***!
  \****************************************************/
/*! exports provided: Grid1Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid1Service", function() { return Grid1Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");







var Grid1Service = /** @class */ (function () {
    function Grid1Service(http) {
        this.http = http;
        this.listUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].endpoint.grid;
    }
    // see https://angular.io/guide/http#getting-error-details
    Grid1Service.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    Grid1Service.prototype.getGridItems = function () {
        return this.http
            .get(this.listUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    Grid1Service.ɵfac = function Grid1Service_Factory(t) { return new (t || Grid1Service)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    Grid1Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Grid1Service, factory: Grid1Service.ɵfac, providedIn: 'root' });
    return Grid1Service;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Grid1Service, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "eP5d":
/*!******************************************************************!*\
  !*** ./src/app/shared/warning-message/warning-message.module.ts ***!
  \******************************************************************/
/*! exports provided: WarningMessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningMessageModule", function() { return WarningMessageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _warning_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warning-message.component */ "GfJL");




var WarningMessageModule = /** @class */ (function () {
    function WarningMessageModule() {
    }
    WarningMessageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WarningMessageModule });
    WarningMessageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WarningMessageModule_Factory(t) { return new (t || WarningMessageModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
    return WarningMessageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WarningMessageModule, { declarations: [_warning_message_component__WEBPACK_IMPORTED_MODULE_2__["WarningMessageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_warning_message_component__WEBPACK_IMPORTED_MODULE_2__["WarningMessageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WarningMessageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_warning_message_component__WEBPACK_IMPORTED_MODULE_2__["WarningMessageComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_warning_message_component__WEBPACK_IMPORTED_MODULE_2__["WarningMessageComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "etk6":
/*!********************************************************!*\
  !*** ./src/app/app-shell/nav-bar/nav-bar.component.ts ***!
  \********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(location) {
        this.location = location;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        this.skipLinkPath = this.location.path() + "#mainContent";
    };
    NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"])); };
    NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 15, vars: 1, consts: [[1, "skipLink"], ["title", "Skip to Main Content", "aria-label", "Skip to Main Content", 3, "href"], [1, "navbar", "navbar-expand-sm", "navbar-light", "border-bottom", "justify-content-between"], ["routerLink", "/", "title", "myApp", "aria-label", "myApp", "role", "heading", "aria-level", "1", 1, "navbar-brand"], [1, "navbar-nav"], ["routerLink", "/", "title", "Blank", "aria-label", "Blank", 1, "nav-item", "nav-link", "active"], ["routerLink", "/grid", "title", "Grid", "aria-label", "Grid", 1, "nav-item", "nav-link", "active"], ["routerLink", "/grid-1", "title", "Grid1", "aria-label", "Grid1", 1, "nav-item", "nav-link", "active"], ["routerLink", "/blank-1", "title", "Blank1", "aria-label", "Blank1", 1, "nav-item", "nav-link", "active"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Skip to Main Content ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " myApp ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Blank ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Grid ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Grid1 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Blank1 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.skipLinkPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".skipLink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: -100px;\r\n  top: -100px;\r\n}\r\n\r\n.skipLink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\r\n  position: fixed;\r\n  z-index: 1000;\r\n  top: 0;\r\n  left: 0;\r\n  padding: 10px;\r\n  color: #ffffff;\r\n  background: #000000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLXNoZWxsL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAtc2hlbGwvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpcExpbmsgYSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC0xMDBweDtcclxuICB0b3A6IC0xMDBweDtcclxufVxyXG5cclxuLnNraXBMaW5rIGE6Zm9jdXMge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxufVxyXG4iXX0= */"] });
    return NavBarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }]; }, null); })();


/***/ }),

/***/ "iEA7":
/*!*******************************************************!*\
  !*** ./src/app/app-shell/grid/grid-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: GridRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridRoutingModule", function() { return GridRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid.component */ "jpVd");





var routes = [
    {
        path: '',
        component: _grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"]
    }
];
var GridRoutingModule = /** @class */ (function () {
    function GridRoutingModule() {
    }
    GridRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GridRoutingModule });
    GridRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GridRoutingModule_Factory(t) { return new (t || GridRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return GridRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GridRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "iNuk":
/*!*****************************************************************!*\
  !*** ./src/app/app-shell/grid/grid-item/grid-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: GridItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridItemComponent", function() { return GridItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var GridItemComponent = /** @class */ (function () {
    function GridItemComponent() {
    }
    GridItemComponent.prototype.ngOnInit = function () { };
    GridItemComponent.ɵfac = function GridItemComponent_Factory(t) { return new (t || GridItemComponent)(); };
    GridItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridItemComponent, selectors: [["app-grid-item"]], inputs: { key: "key", gridItem: "gridItem" }, decls: 6, vars: 2, consts: [["src", "../../../assets/GreyBox.svg", "alt", "Default Grey Box", 1, "mb-3"]], template: function GridItemComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.gridItem.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.gridItem.shortDescription);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1zaGVsbC9ncmlkL2dyaWQtaXRlbS9ncmlkLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"] });
    return GridItemComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid-item',
                templateUrl: './grid-item.component.html',
                styleUrls: ['./grid-item.component.css']
            }]
    }], function () { return []; }, { key: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gridItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "jpVd":
/*!**************************************************!*\
  !*** ./src/app/app-shell/grid/grid.component.ts ***!
  \**************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _grid_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid.service */ "8iA4");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid-item/grid-item.component */ "iNuk");
/* harmony import */ var _shared_warning_message_warning_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/warning-message/warning-message.component */ "GfJL");









function GridComponent_app_grid_item_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-grid-item", 7);
} if (rf & 2) {
    var gridItem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gridItem", gridItem_r2);
} }
function GridComponent_app_warning_message_9_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-warning-message", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("warningMessageOpen", function GridComponent_app_warning_message_9_Template_app_warning_message_warningMessageOpen_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.handleWarningClose($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx_r1.warningMessageText);
} }
var GridComponent = /** @class */ (function () {
    function GridComponent(gridService) {
        this.gridService = gridService;
        this.greyBoxUrl = '../../../assets/GreyBox.svg';
        this.warningMessageText = '';
        this.warningMessageOpen = false;
    }
    GridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gridItems$ = this.gridService.getGridItems().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.warningMessageText = "Request to get grid text failed: " + error;
            _this.warningMessageOpen = true;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    };
    GridComponent.prototype.handleWarningClose = function (open) {
        this.warningMessageOpen = open;
        this.warningMessageText = '';
    };
    GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_grid_service__WEBPACK_IMPORTED_MODULE_1__["GridService"])); };
    GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridComponent, selectors: [["app-grid"]], decls: 10, vars: 4, consts: [["id", "mainContent"], [1, "container"], [1, "row", "justify-content-center", "py-5"], ["id", "test"], [1, "row", "justify-content-around", "text-center", "pb-5"], ["class", "col-4 p-5", 3, "gridItem", 4, "ngFor", "ngForOf"], [3, "text", "warningMessageOpen", 4, "ngIf"], [1, "col-4", "p-5", 3, "gridItem"], [3, "text", "warningMessageOpen"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Grid");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GridComponent_app_grid_item_7_Template, 1, 1, "app-grid-item", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GridComponent_app_warning_message_9_Template, 1, 1, "app-warning-message", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, ctx.gridItems$));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.warningMessageOpen);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_5__["GridItemComponent"], _shared_warning_message_warning_message_component__WEBPACK_IMPORTED_MODULE_6__["WarningMessageComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".header[_ngcontent-%COMP%] {\r\n    background-color: #cecece;\r\n    padding-top: 7rem;\r\n    padding-bottom: 7rem;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLXNoZWxsL2dyaWQvZ3JpZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAtc2hlbGwvZ3JpZC9ncmlkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XHJcbiAgICBwYWRkaW5nLXRvcDogN3JlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cmVtO1xyXG4gIH1cclxuICBcclxuIl19 */"] });
    return GridComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid',
                templateUrl: './grid.component.html',
                styleUrls: ['./grid.component.css']
            }]
    }], function () { return [{ type: _grid_service__WEBPACK_IMPORTED_MODULE_1__["GridService"] }]; }, null); })();


/***/ }),

/***/ "lQT+":
/*!****************************************************!*\
  !*** ./src/app/app-shell/blank/blank.component.ts ***!
  \****************************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var BlankComponent = /** @class */ (function () {
    function BlankComponent() {
    }
    BlankComponent.prototype.ngOnInit = function () { };
    BlankComponent.ɵfac = function BlankComponent_Factory(t) { return new (t || BlankComponent)(); };
    BlankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlankComponent, selectors: [["app-blank"]], decls: 5, vars: 0, consts: [["id", "mainContent"], [1, "container"], [1, "row", "justify-content-center", "py-5"]], template: function BlankComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Blank");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1zaGVsbC9ibGFuay9ibGFuay5jb21wb25lbnQuY3NzIn0= */"] });
    return BlankComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blank',
                templateUrl: './blank.component.html',
                styleUrls: ['./blank.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "t0WS":
/*!*************************************************************!*\
  !*** ./src/app/app-shell/blank-1/blank-1-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: Blank1RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blank1RoutingModule", function() { return Blank1RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _blank_1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blank-1.component */ "YAMX");





var routes = [
    {
        path: '',
        component: _blank_1_component__WEBPACK_IMPORTED_MODULE_2__["Blank1Component"]
    }
];
var Blank1RoutingModule = /** @class */ (function () {
    function Blank1RoutingModule() {
    }
    Blank1RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Blank1RoutingModule });
    Blank1RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Blank1RoutingModule_Factory(t) { return new (t || Blank1RoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return Blank1RoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Blank1RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Blank1RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "t5nQ":
/*!*******************************************************************!*\
  !*** ./src/app/app-shell/grid-1/grid-item/grid-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: GridItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridItemComponent", function() { return GridItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var GridItemComponent = /** @class */ (function () {
    function GridItemComponent() {
    }
    GridItemComponent.prototype.ngOnInit = function () { };
    GridItemComponent.ɵfac = function GridItemComponent_Factory(t) { return new (t || GridItemComponent)(); };
    GridItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridItemComponent, selectors: [["app-grid-item"]], inputs: { key: "key", gridItem: "gridItem" }, decls: 6, vars: 2, consts: [["src", "../../../assets/GreyBox.svg", "alt", "Default Grey Box", 1, "mb-3"]], template: function GridItemComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.gridItem.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.gridItem.shortDescription);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1zaGVsbC9ncmlkLTEvZ3JpZC1pdGVtL2dyaWQtaXRlbS5jb21wb25lbnQuY3NzIn0= */"] });
    return GridItemComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid-item',
                templateUrl: './grid-item.component.html',
                styleUrls: ['./grid-item.component.css']
            }]
    }], function () { return []; }, { key: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gridItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




var routes = [
    {
        path: '',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./app-shell/blank/blank.module */ "KcXe")).then(function (module) { return module.BlankModule; }); }
    },
    {
        path: 'grid',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./app-shell/grid/grid.module */ "cXnt")).then(function (module) { return module.GridModule; }); }
    },
    {
        path: 'grid-1',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./app-shell/grid-1/grid-1.module */ "/UTX")).then(function (module) { return module.Grid1Module; }); }
    },
    {
        path: 'blank-1',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./app-shell/blank-1/blank-1.module */ "Y+zW")).then(function (module) { return module.Blank1Module; }); }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zx7w":
/*!******************************************************!*\
  !*** ./src/app/app-shell/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 19, vars: 0, consts: [[1, "footer"], [1, "container-fluid"], [1, "row", "justify-content-around"], [1, "col-8", "col-md-5"], [1, "title"], [1, "description"], [1, "col-2"], [1, "list-unstyled"], ["href", "/", "title", "Example Link", "aria-label", "Example Link", 1, "footerlink"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "myApp");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " This is placeholder text. Your web app description goes here. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Example Link ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Example Link ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Example Link ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: [".footer[_ngcontent-%COMP%] {\r\n  background-color: #1d1d1d;\r\n  padding-top: 2rem;\r\n  padding-bottom: 4rem;\r\n}\r\n  \r\n.title[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\n  \r\n.description[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\n  \r\n.footerlink[_ngcontent-%COMP%], .footerlink[_ngcontent-%COMP%]:hover {\r\n  color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLXNoZWxsL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOztFQUVFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FwcC1zaGVsbC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkO1xyXG4gIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xyXG59XHJcbiAgXHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5mb290ZXJsaW5rLFxyXG4uZm9vdGVybGluazpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuICBcclxuIl19 */"] });
    return FooterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map