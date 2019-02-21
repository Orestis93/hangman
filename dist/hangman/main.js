(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_word_word_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/word/word.component */ "./src/app/components/word/word.component.ts");
/* harmony import */ var _guards_word_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/word.guard */ "./src/app/guards/word.guard.ts");





var routes = [
    { path: '', component: _components_word_word_component__WEBPACK_IMPORTED_MODULE_3__["WordComponent"], canActivate: [_guards_word_guard__WEBPACK_IMPORTED_MODULE_4__["WordGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'hangman';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_word_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/word.service */ "./src/app/services/word.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_word_word_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/word/word.component */ "./src/app/components/word/word.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_hang_hang_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/hang/hang.component */ "./src/app/components/hang/hang.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/dialog/dialog.component */ "./src/app/components/dialog/dialog.component.ts");
/* harmony import */ var _guards_word_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/word.guard */ "./src/app/guards/word.guard.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/header/header.component */ "./src/app/core/header/header.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_word_word_component__WEBPACK_IMPORTED_MODULE_6__["WordComponent"],
                _components_hang_hang_component__WEBPACK_IMPORTED_MODULE_11__["HangComponent"],
                _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_13__["DialogComponent"],
                _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                _core_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"]
            ],
            providers: [_services_word_service__WEBPACK_IMPORTED_MODULE_3__["WordService"], _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_13__["DialogComponent"], _guards_word_guard__WEBPACK_IMPORTED_MODULE_14__["WordGuard"]],
            entryComponents: [_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_13__["DialogComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dialog/dialog.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/dialog/dialog.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <div class=\"modalayout\">\n    <dialog id=\"alertModal\" class=\"modal\">\n      <h2>{{modalText}}</h2>\n      <div class=\"modal-body\">\n    {{ modalMessage }}\n  </div>\n      <button mat-button (click)=\"newGame()\">New Game</button>\n    </dialog>\n  </div>\n\n\n\n "

/***/ }),

/***/ "./src/app/components/dialog/dialog.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/dialog/dialog.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dark-modal .modal-content {\n  background-color: #292b2c;\n  color: white; }\n\n.dark-modal .close {\n  color: white; }\n\n.light-blue-backdrop {\n  background-color: #5cb3fd; }\n\n.modalayout {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column; }\n\n.modal {\n  opacity: 1;\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n  -webkit-animation-duration: 4s;\n  animation-duration: 4s;\n  border: 1px solid red;\n  color: white;\n  background: #840606;\n  border: none;\n  border-radius: 22px;\n  width: 30%;\n  text-align: center; }\n\n.modal button {\n    text-transform: capitalize;\n    font-size: 20px;\n    font-weight: bold;\n    background: transparent;\n    color: white;\n    border-radius: 40px;\n    border: 2px solid white;\n    padding: 20px; }\n\n.modal button:hover {\n    color: #e6c200;\n    border-color: #e6c200; }\n\n.modal p {\n    font-size: 32px;\n    color: white; }\n\n.modal h2 {\n    font-size: 40px;\n    color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaWFsb2cvQzpcXFVzZXJzXFxPcmVzdFxcaGFuZ21hbi9zcmNcXGFwcFxcY29tcG9uZW50c1xcZGlhbG9nXFxkaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWSxFQUFBOztBQUVkO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsVUFBVTtFQUNWLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixrQkFBa0IsRUFBQTs7QUFacEI7SUFlSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix1QkFBc0I7SUFDdEIsWUFBVztJQUNYLG1CQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsYUFBYSxFQUFBOztBQXRCakI7SUEwQkksY0FBc0I7SUFDdEIscUJBQThCLEVBQUE7O0FBM0JsQztJQThCSSxlQUFlO0lBQ2YsWUFBWSxFQUFBOztBQS9CaEI7SUFtQ00sZUFBZTtJQUNmLFlBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXJrLW1vZGFsIC5tb2RhbC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyYjJjO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZGFyay1tb2RhbCAuY2xvc2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubGlnaHQtYmx1ZS1iYWNrZHJvcCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjYjNmZDtcclxufVxyXG4ubW9kYWxheW91dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLm1vZGFse1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDRzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiAjODQwNjA2O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6NDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjpkYXJrZW4oZ29sZCwgNSUpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oZ29sZCwgNSUpO1xyXG4gIH1cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgIGNvbG9yOndoaXRlO1xyXG4gIH1cclxuICBcclxuIFxyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dialog/dialog.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/dialog/dialog.component.ts ***!
  \*******************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DialogComponent = /** @class */ (function () {
    function DialogComponent() {
        this.dialogOpen = false;
        this.myEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent.prototype.newGame = function () {
        this.myEvent.emit(null);
    };
    DialogComponent.prototype.Modal = function (modalText) {
        if (!this.dialogOpen) {
            var dialog = document.getElementById('alertModal');
            this.dialogOpen = true;
            this.modalText = modalText;
            dialog.showModal();
        }
    };
    DialogComponent.prototype.closeModal = function () {
        if (this.dialogOpen) {
            var dialog = document.getElementById('alertModal');
            this.dialogOpen = false;
            dialog.close();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DialogComponent.prototype, "secretWordObject", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DialogComponent.prototype, "modalText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DialogComponent.prototype, "myEvent", void 0);
    DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/components/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.scss */ "./src/app/components/dialog/dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/components/hang/hang.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/hang/hang.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hang{\r\n    width: 90%;\r\n    position: relative;\r\n    z-index: 9;\r\n}\r\n.hanglayout{\r\n    float:right;\r\n    min-width: 25%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oYW5nL2hhbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGFuZy9oYW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGFuZ3tcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA5O1xyXG59XHJcbi5oYW5nbGF5b3V0e1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICBtaW4td2lkdGg6IDI1JTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/hang/hang.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/hang/hang.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"hanglayout\">\n    <div *ngIf=\"tries==6\"><img src=\"/assets/images/hangimage.png\" class=\"hang\"></div>\n    <div *ngIf=\"tries == 5\"><img src=\"/assets/images/1.jpg\" class=\"hang\"></div>\n    <div *ngIf=\"tries == 4\"><img src=\"/assets/images/2.jpg\" class=\"hang\"></div>\n    <div *ngIf=\"tries == 3\"><img src=\"/assets/images/3.jpg\" class=\"hang\"></div>\n    <div *ngIf=\"tries == 2\"><img src=\"/assets/images/4.jpg\" class=\"hang\"></div>\n    <div *ngIf=\"tries == 1\"><img src=\"/assets/images/5.jpg\" class=\"hang\"></div>\n    <div *ngIf=\"tries == 0\"><img src=\"/assets/images/6.jpg\" class=\"hang\"></div>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/hang/hang.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/hang/hang.component.ts ***!
  \***************************************************/
/*! exports provided: HangComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HangComponent", function() { return HangComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HangComponent = /** @class */ (function () {
    function HangComponent() {
    }
    HangComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HangComponent.prototype, "tries", void 0);
    HangComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hang',
            template: __webpack_require__(/*! ./hang.component.html */ "./src/app/components/hang/hang.component.html"),
            styles: [__webpack_require__(/*! ./hang.component.css */ "./src/app/components/hang/hang.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HangComponent);
    return HangComponent;
}());



/***/ }),

/***/ "./src/app/components/word/word.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/word/word.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainlayout\">\n  <app-header [rounds]=\"rounds\"></app-header>\n<mat-card>\n    <app-hang [tries]=\"tries\"></app-hang>\n  <mat-card-content >\n      <div class=\"letterlength\">\n          <span>The word you are guessing contains {{ secretWordObjectLength}} letters.</span>\n      </div>\n        <br/><br/>\n    <div class=\"guess-word\">     \n      <div *ngFor=\"let secret of secretWordObject\" [ngClass]=\"{guessed: GuessedCorrect(secret)}\" >\n          <span *ngIf=\"GuessedCorrect(secret)\">{{secret}}</span>\n          <span class=\"notguessed\" *ngIf=\"!GuessedCorrect(secret)\">_</span>\n      </div>\n     </div>\n\n  </mat-card-content>\n \n</mat-card>\n<mat-card>\n\n  <mat-card-content>\n\n <mat-card-actions class=\"center\">\n    <span *ngFor=\"let userinput of letters; let i = index\">\n        <button mat-fab color=\"accent\" (click)=\"checkGuessedLetter(userinput);\"  [disabled]=\"userinput.chosen\" >{{userinput.name}}</button>\n    </span>\n </mat-card-actions>\n      <br/>\n      <div class=\"center\">\n        <div class=\"secretWord\" [ngClass]=\"{'warning':tries < 3}\">\n                    Tries Remaining:  {{tries}}\n         </div>\n    \n       </div>\n</mat-card-content>\n</mat-card>\n\n<app-dialog [modalText]=\"modalText\" [secretWordObject]=\"secretWordObject\" (myEvent)=\"newGame()\"></app-dialog>\n<app-footer [missedLetters]=\"missedLetters\"></app-footer>  \n</div>\n"

/***/ }),

/***/ "./src/app/components/word/word.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/word/word.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inactive {\n  color: gray; }\n\n.notguessed {\n  background-color: #5f0905;\n  color: white;\n  border-radius: 15px;\n  padding: 15px;\n  font-size: 26px;\n  display: flex; }\n\n.guessed {\n  color: white;\n  border-radius: 15px;\n  padding: 17px;\n  font-size: 22px;\n  background-color: #5f0905;\n  /* Safari */\n  transition: 1s; }\n\n.guess-word {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  width: 50%; }\n\n.letterlength {\n  font-size: 2.0rem;\n  color: #5f0905; }\n\n.warning {\n  color: red; }\n\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: none; }\n\n* {\n  text-align: center; }\n\n.letters {\n  background-color: gray; }\n\n.secretWord {\n  margin-top: 20px;\n  margin-bottom: 40px;\n  font-size: 2.5rem; }\n\n.mainlayout {\n  -webkit-animation-name: fadeIn;\n          animation-name: fadeIn;\n  -webkit-animation-duration: 4s;\n          animation-duration: 4s;\n  border-radius: 10px;\n  width: 90%;\n  margin: 0 auto;\n  padding: 20px;\n  background-color: #976c3d; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93b3JkL0M6XFxVc2Vyc1xcT3Jlc3RcXGhhbmdtYW4vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHdvcmRcXHdvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFVLEVBQUE7O0FBR2Q7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0VBQ2YseUJBQXlCO0VBQ0EsV0FBQTtFQUN6QixjQUFlLEVBQUE7O0FBR25CO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsVUFBUyxFQUFBOztBQUViO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxVQUFTLEVBQUE7O0FBRWI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDSSxzQkFBc0IsRUFBQTs7QUFFMUI7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixtQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7RUFDZCxhQUFhO0VBQ2IseUJBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dvcmQvd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmFjdGl2ZXtcclxuICAgIGNvbG9yOmdyYXk7XHJcbn1cclxuXHJcbi5ub3RndWVzc2Vke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmMDkwNTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uZ3Vlc3NlZCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMTdweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjA5MDU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICAxczsgLyogU2FmYXJpICovXHJcbiAgICB0cmFuc2l0aW9uOiAgMXM7XHJcbiAgXHJcbn1cclxuLmd1ZXNzLXdvcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIHdpZHRoOjUwJTtcclxufVxyXG4ubGV0dGVybGVuZ3Roe1xyXG4gICAgZm9udC1zaXplOiAyLjByZW07XHJcbiAgICBjb2xvcjogIzVmMDkwNTtcclxuICAgIH1cclxuLndhcm5pbmd7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn1cclxuLm1hdC1jYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuKiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5sZXR0ZXJze1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIH1cclxuICAuc2VjcmV0V29yZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIH1cclxuXHJcbiAgLm1haW5sYXlvdXR7XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM5NzZjM2Q7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/word/word.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/word/word.component.ts ***!
  \***************************************************/
/*! exports provided: WordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordComponent", function() { return WordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_word_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/word.service */ "./src/app/services/word.service.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog/dialog.component */ "./src/app/components/dialog/dialog.component.ts");




var WordComponent = /** @class */ (function () {
    function WordComponent(wordService, dialogcomponent) {
        this.wordService = wordService;
        this.dialogcomponent = dialogcomponent;
        this.correctlyGuessedLetters = null;
    }
    WordComponent.prototype.receiveMessage = function ($event) {
        this.newGame = $event;
    };
    WordComponent.prototype.ngOnInit = function () {
        console.log((this.wordService.getGameWords()));
        this.newGame();
    };
    WordComponent.prototype.newGame = function () {
        this.letters = this.wordService.sliceWord('abcdefghijklmnopqrstuvwxyz');
        this.setOfWords = this.wordService.getGameWords();
        this.tries = 6;
        this.rounds = 1;
        this.modalText = "";
        this.correctguesses = 0;
        this.secretWordObject = this.setOfWords[0].split('');
        this.secretWordObjectLength = this.secretWordObject.length;
        this.correctlyGuessedLetters = [];
        this.missedLetters = "";
        this.dialogcomponent.closeModal();
    };
    WordComponent.prototype.nextRound = function () {
        this.CheckIfWonTheGame();
        this.tries = 6;
        this.secretWordObject = this.setOfWords[this.rounds - 1].split('');
        this.secretWordObjectLength = this.secretWordObject.length;
        this.correctlyGuessedLetters = [];
        this.missedLetters = "";
        this.CheckIfWonTheGame();
        this.resetKeyboard();
    };
    WordComponent.prototype.checkGuessedLetter = function (userinput) {
        userinput.chosen = true;
        for (var i = 0; i <= this.secretWordObject.length; i++) {
            if (userinput.name == this.secretWordObject[i]) {
                this.correctlyGuessedLetters.push(userinput.name);
                console.log(this.correctlyGuessedLetters);
            }
        }
        if (this.secretWordObject.indexOf(userinput.name) == -1) {
            this.tries--;
            this.missedLetters += userinput.name;
            this.checkIfLost();
        }
        this.checkIfWon();
    };
    WordComponent.prototype.resetKeyboard = function () {
        this.letters.forEach(function (letter) {
            letter.chosen = false;
        });
    };
    WordComponent.prototype.isSecretWord = function (secret, array) {
        return array.indexOf(secret) > -1;
    };
    WordComponent.prototype.GuessedCorrect = function (secret) {
        return this.isSecretWord(secret, this.correctlyGuessedLetters);
    };
    WordComponent.prototype.checkIfLost = function () {
        if (this.tries == 0) {
            this.modalText = "You Lost :( ";
            this.dialogcomponent.Modal('You Won');
        }
    };
    WordComponent.prototype.checkIfWon = function () {
        if (this.secretWordObjectLength == this.correctlyGuessedLetters.length) {
            this.rounds++;
            this.correctguesses++;
            this.nextRound();
        }
        this.CheckIfWonTheGame();
    };
    WordComponent.prototype.CheckIfWonTheGame = function () {
        if (this.correctguesses == 5) {
            this.modalText = "Congrats! You Won";
            this.dialogcomponent.Modal('You Won');
        }
    };
    ;
    WordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-word',
            template: __webpack_require__(/*! ./word.component.html */ "./src/app/components/word/word.component.html"),
            styles: [__webpack_require__(/*! ./word.component.scss */ "./src/app/components/word/word.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_word_service__WEBPACK_IMPORTED_MODULE_2__["WordService"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]])
    ], WordComponent);
    return WordComponent;
}());



/***/ }),

/***/ "./src/app/core/footer/footer.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/footer/footer.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"center\">Missed letters: {{missedLetters.split('')}}</h2>"

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FooterComponent.prototype, "missedLetters", void 0);
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/core/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/header/header.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"center title\">{{modalText}}</h1>\n<h2>Round:{{rounds}}</h2>"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.modalText = "Welcome to Hangman Game";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], HeaderComponent.prototype, "rounds", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/core/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/guards/word.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/word.guard.ts ***!
  \**************************************/
/*! exports provided: WordGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordGuard", function() { return WordGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_word_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/word.service */ "./src/app/services/word.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var WordGuard = /** @class */ (function () {
    function WordGuard(wordService) {
        this.wordService = wordService;
    }
    WordGuard.prototype.canActivate = function () {
        var _this = this;
        return this.wordService.getAllWords().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
            _this.wordService.setGameWords(5);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(true));
    };
    WordGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_word_service__WEBPACK_IMPORTED_MODULE_1__["WordService"]])
    ], WordGuard);
    return WordGuard;
}());



/***/ }),

/***/ "./src/app/services/word.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/word.service.ts ***!
  \******************************************/
/*! exports provided: WordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordService", function() { return WordService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var WordService = /** @class */ (function () {
    function WordService(http) {
        this.http = http;
        this.mainurl = "http://localhost:4200/assets/answers.json";
        this.allWords = [];
        this.gameWords = [];
    }
    WordService.prototype.sliceWord = function (word) {
        return word.split('').map(function (letter) {
            return { name: letter, chosen: false };
        });
    };
    WordService.prototype.setGameWords = function (noOfWords) {
        this.resetGameArray();
        var i = 0;
        while (i < noOfWords) {
            var randomWord = this.getRandomWord();
            if (!this.gameWords.includes(randomWord)) {
                this.gameWords.push(randomWord);
                i++;
            }
        }
        return this.getGameWords();
    };
    WordService.prototype.getGameWords = function () {
        return this.gameWords;
    };
    WordService.prototype.getAllWords = function () {
        var _this = this;
        return this.http.get(this.mainurl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (words) { return _this.allWords = words; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            throw error;
        }));
    };
    WordService.prototype.getRandomWord = function () {
        return this.randomWord();
    };
    WordService.prototype.randomWord = function () {
        if (this.allWords.length) {
            var pos = this.getRandomInt(this.allWords.length - 1);
            return this.allWords[pos];
        }
    };
    WordService.prototype.getRandomInt = function (max) {
        return Math.floor(Math.random() * (max + 1));
    };
    WordService.prototype.resetGameArray = function () {
        this.gameWords = [];
    };
    WordService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WordService);
    return WordService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Orest\hangman\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map