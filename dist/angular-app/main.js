(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "++6k":
/*!*************************************************!*\
  !*** ./src/app/services/aside/aside.service.ts ***!
  \*************************************************/
/*! exports provided: AsideService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideService", function() { return AsideService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class AsideService {
    constructor() {
        this.isAsideVisible = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
    }
    getAsideVisibility() {
        return this.isAsideVisible.asObservable();
    }
    setAsideVisibility(value) {
        this.isAsideVisible.next(value);
    }
}
AsideService.ɵfac = function AsideService_Factory(t) { return new (t || AsideService)(); };
AsideService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AsideService, factory: AsideService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsideService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "/SmA":
/*!*******************************************************!*\
  !*** ./src/app/pages/video-page/video-page.module.ts ***!
  \*******************************************************/
/*! exports provided: VideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPageModule", function() { return VideoPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _video_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video-page-routing.module */ "cuKy");
/* harmony import */ var _video_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video-page.component */ "liVU");
/* harmony import */ var src_app_components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/pagination/pagination.module */ "O43q");
/* harmony import */ var src_app_components_video_video_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/video/video.module */ "KhKd");







class VideoPageModule {
}
VideoPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VideoPageModule });
VideoPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VideoPageModule_Factory(t) { return new (t || VideoPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
            src_app_components_video_video_module__WEBPACK_IMPORTED_MODULE_5__["VideoModule"],
            _video_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["VideoPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VideoPageModule, { declarations: [_video_page_component__WEBPACK_IMPORTED_MODULE_3__["VideoPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
        src_app_components_video_video_module__WEBPACK_IMPORTED_MODULE_5__["VideoModule"],
        _video_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["VideoPageRoutingModule"]], exports: [_video_page_component__WEBPACK_IMPORTED_MODULE_3__["VideoPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _video_page_component__WEBPACK_IMPORTED_MODULE_3__["VideoPageComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
                    src_app_components_video_video_module__WEBPACK_IMPORTED_MODULE_5__["VideoModule"],
                    _video_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["VideoPageRoutingModule"]
                ],
                exports: [_video_page_component__WEBPACK_IMPORTED_MODULE_3__["VideoPageComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Study\Angular\angular-app\src\main.ts */"zUnb");


/***/ }),

/***/ "0fkH":
/*!*****************************************************!*\
  !*** ./src/app/components/email/email.component.ts ***!
  \*****************************************************/
/*! exports provided: EmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function() { return EmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function EmailComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmailComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0430 \u044D\u0442\u043E\u0442 email \u0431\u0443\u0434\u0443\u0442 \u0432\u044B\u0441\u043B\u0430\u043D\u044B \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class EmailComponent {
    constructor() {
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
        ]);
    }
    ngOnInit() {
    }
}
EmailComponent.ɵfac = function EmailComponent_Factory(t) { return new (t || EmailComponent)(); };
EmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailComponent, selectors: [["app-email"]], decls: 5, vars: 7, consts: [[1, "email"], ["type", "email", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 email", 1, "email__input", 3, "formControl"], ["class", "email__text email__text_invalid", 4, "ngIf", "ngIfElse"], ["validEmail", ""], [1, "email__text", "email__text_invalid"], [1, "email__text", "email__text_valid"]], template: function EmailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailComponent_p_2_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmailComponent_ng_template_3_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("email__input_invalid", ctx.email.invalid && ctx.email.touched)("email__input_valid", ctx.email.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.invalid && ctx.email.touched)("ngIfElse", _r1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-email',
                templateUrl: './email.component.html',
                styleUrls: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "0oYm":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 9, vars: 0, consts: [[1, "menu"], ["routerLink", "/home", "routerLinkActive", "menu__item_active", 1, "menu__item"], ["routerLink", "/videos", "routerLinkActive", "menu__item_active", 1, "menu__item"], ["routerLink", "/library", "routerLinkActive", "menu__item_active", 1, "menu__item"], ["routerLink", "/article-list", "routerLinkActive", "menu__item_active", 1, "menu__item"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041E \u043A\u0443\u0440\u0441\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0412\u0438\u0434\u0435\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0411\u043B\u043E\u0433");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["[_nghost-%COMP%] {\n      display: contents;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styles: [`
    :host {
      display: contents;
    }
  `]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.component */ "0oYm");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../social/social.component */ "nJq9");
/* harmony import */ var _burger_burger_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../burger/burger.component */ "lGq+");






class HeaderComponent {
    constructor() { }
    ngOnInit() { }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 12, vars: 0, consts: [[1, "header"], [1, "header__content"], ["routerLink", "/home", 1, "logo"], ["src", "./assets/images/logo_flower.svg", 1, "logo__image"], [1, "logo__text"], [1, "logo__text", "logo__text_big", "logo__text_black"], [1, "logo__text", "logo__text_small_gray"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "akalmeetkaur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-social");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-burger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _social_social_component__WEBPACK_IMPORTED_MODULE_3__["SocialComponent"], _burger_burger_component__WEBPACK_IMPORTED_MODULE_4__["BurgerComponent"]], styles: ["[_nghost-%COMP%] {\n        display: block;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styles: [
                    `
      :host {
        display: block;
      }
    `,
                ],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "2X6e":
/*!*****************************************************!*\
  !*** ./src/app/components/aside/aside.component.ts ***!
  \*****************************************************/
/*! exports provided: AsideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideComponent", function() { return AsideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_aside_aside_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/aside/aside.service */ "++6k");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu/menu.component */ "0oYm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../copyright/copyright.component */ "Hbxp");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../social/social.component */ "nJq9");








const _c0 = function () { return ["fas", "times"]; };
class AsideComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getAsideVisibility().subscribe(value => {
            this.asideVisible = value;
        });
    }
    onClick(event) {
        event.preventDefault();
        this.service.getAsideVisibility().subscribe(value => this.asideVisible = value);
        this.service.setAsideVisibility(!this.asideVisible);
    }
}
AsideComponent.ɵfac = function AsideComponent_Factory(t) { return new (t || AsideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_aside_aside_service__WEBPACK_IMPORTED_MODULE_1__["AsideService"])); };
AsideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsideComponent, selectors: [["app-aside"]], decls: 14, vars: 4, consts: [[1, "aside"], ["href", "#", 1, "aside__cleaner", 3, "click"], [3, "icon"], [1, "aside__content"], ["routerLink", "/home", 1, "logo"], ["src", "./assets/images/logo_flower_gray.svg", 1, "logo__image", "logo__image_gray"], [1, "logo__text"], [1, "logo__text", "logo__text_big", "logo__text_gray"], [1, "logo__text", "logo__text_small_gray"]], template: function AsideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsideComponent_Template_a_click_1_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "akalmeetkaur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-copyright");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-social");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("aside_hidden", !ctx.asideVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_5__["CopyrightComponent"], _social_social_component__WEBPACK_IMPORTED_MODULE_6__["SocialComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aside',
                templateUrl: './aside.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: src_app_services_aside_aside_service__WEBPACK_IMPORTED_MODULE_1__["AsideService"] }]; }, null); })();


/***/ }),

/***/ "6zUO":
/*!*******************************************************************!*\
  !*** ./src/app/pages/library-page/library-page-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: LibraryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryPageRoutingModule", function() { return LibraryPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _library_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./library-page.component */ "MfBH");





const routes = [
    {
        path: '',
        component: _library_page_component__WEBPACK_IMPORTED_MODULE_2__["LibraryPageComponent"]
    }
];
class LibraryPageRoutingModule {
}
LibraryPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LibraryPageRoutingModule });
LibraryPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LibraryPageRoutingModule_Factory(t) { return new (t || LibraryPageRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LibraryPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LibraryPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "7tuN":
/*!******************************************************!*\
  !*** ./src/app/components/section/section.module.ts ***!
  \******************************************************/
/*! exports provided: SectionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionModule", function() { return SectionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section.component */ "Rtmn");




class SectionModule {
}
SectionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SectionModule });
SectionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SectionModule_Factory(t) { return new (t || SectionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SectionModule, { declarations: [_section_component__WEBPACK_IMPORTED_MODULE_2__["SectionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_section_component__WEBPACK_IMPORTED_MODULE_2__["SectionComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _section_component__WEBPACK_IMPORTED_MODULE_2__["SectionComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _section_component__WEBPACK_IMPORTED_MODULE_2__["SectionComponent"]
                ]
            }]
    }], null, null); })();


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
const environment = {
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

/***/ "G4NA":
/*!*****************************************************!*\
  !*** ./src/app/components/video/video.component.ts ***!
  \*****************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");






function VideoComponent_ng_container_2_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041A\u0443\u043F\u0438\u0442\u044C \u0432\u0438\u0434\u0435\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoComponent_ng_container_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoComponent_ng_container_2_ng_template_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onClick(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0438\u0434\u0435\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["fas", "times"]; };
function VideoComponent_ng_container_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "youtube-player", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoComponent_ng_container_2_ng_container_10_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onClick(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("video__popup_hidden", ctx_r6.hiddenVideos[i_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", ctx_r6.videosId[i_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
} }
function VideoComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VideoComponent_ng_container_2_a_7_Template, 2, 0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VideoComponent_ng_container_2_ng_template_8_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, VideoComponent_ng_container_2_ng_container_10_Template, 5, 5, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const video_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx_r0.videoCover[i_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](video_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](video_r1.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", video_r1.purchase)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !video_r1.purchase);
} }
const _c1 = ["*"];
class VideoComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.videosId = [];
    }
    ngOnInit() {
        // hide all videos after rendering
        this.hiddenVideos = this.videos.map(() => true);
    }
    get videoCover() {
        return this.videos.map(el => {
            return this.sanitizer.bypassSecurityTrustResourceUrl(el.cover);
        });
    }
    onClick(index) {
        // incert youtube iframe element
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
        // incert video ID
        this.videosId[index] = this.videos[index].link;
        // show/hide video-player onclick event
        this.hiddenVideos[index] = this.hiddenVideos[index] === true ? false : true;
    }
}
VideoComponent.ɵfac = function VideoComponent_Factory(t) { return new (t || VideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoComponent, selectors: [["app-video"]], inputs: { videos: "videos" }, ngContentSelectors: _c1, decls: 3, vars: 1, consts: [[1, "video"], [4, "ngFor", "ngForOf"], [1, "video__item"], [1, "video__overlay"], [1, "video__title"], [1, "video__text"], ["class", "button button_blue video__button", 4, "ngIf", "ngIfElse"], ["watchBlock", ""], [4, "ngIf"], [1, "button", "button_blue", "video__button"], [1, "button", "button_light", "video__button", 3, "click"], [1, "video__popup"], [1, "video__player", 3, "videoId"], [1, "video__cleaner", 3, "click"], [3, "icon"]], template: function VideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VideoComponent_ng_container_2_Template, 11, 7, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.videos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_3__["YouTubePlayer"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-video',
                templateUrl: './video.component.html',
                styles: []
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, { videos: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "GMaO":
/*!*************************************************!*\
  !*** ./src/app/services/video/video.service.ts ***!
  \*************************************************/
/*! exports provided: VideoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return VideoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class VideoService {
    constructor() {
        this.limit = 4;
        this.videos = [
            {
                id: 0,
                title: 'Приветствие',
                text: 'Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).',
                link: 'y3-EJ-bqnlY',
                cover: 'url(https://img.youtube.com/vi/y3-EJ-bqnlY/0.jpg)',
                purchase: false,
                promo: true,
            },
            {
                id: 1,
                title: 'Техники дыхания',
                text: 'Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).',
                link: 'zpSd6ptD2Nw',
                cover: 'url(https://img.youtube.com/vi/zpSd6ptD2Nw/0.jpg)',
                purchase: true,
                promo: true,
            },
            {
                id: 2,
                title: 'Ноги направо голова налево',
                text: 'Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).',
                link: '0m2WVKXAgws',
                cover: 'url(https://img.youtube.com/vi/0m2WVKXAgws/0.jpg)',
                purchase: true,
                promo: true,
            },
            {
                id: 3,
                title: 'Женские практики',
                text: 'Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).',
                link: 'a8ucKz2Auak',
                cover: 'url(https://img.youtube.com/vi/a8ucKz2Auak/0.jpg)',
                purchase: false,
            },
            {
                id: 4,
                title: 'Собачка и другие асаны',
                text: 'Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).',
                link: 'WFnBIPUTYX8',
                cover: 'url(https://img.youtube.com/vi/WFnBIPUTYX8/0.jpg)',
                purchase: false,
            },
            {
                id: 5,
                title: 'Женские практики крупным планом',
                text: 'Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).',
                link: 'fP_lLxo7V34',
                cover: 'url(https://img.youtube.com/vi/fP_lLxo7V34/0.jpg)',
                purchase: false,
            }
        ];
    }
    getVideos(params) {
        /**
         *  GET
         *  /api/v1/videos
         *
         *  filter: {
         *    page: number
         *    promo: true
         *  }
         */
        if (params.filter.promo) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
                data: this.videos.filter(video => video.promo === true),
                limit: this.limit,
                count: this.videos.length
            });
        }
        if (params.filter.page !== null || params.filter.page !== undefined) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
                data: this.videos.filter(video => {
                    return video.id >= params.filter.page * this.limit && video.id < params.filter.page * this.limit + this.limit;
                }),
                limit: this.limit,
                count: this.videos.length
            });
        }
    }
}
VideoService.ɵfac = function VideoService_Factory(t) { return new (t || VideoService)(); };
VideoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VideoService, factory: VideoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Hbxp":
/*!*************************************************************!*\
  !*** ./src/app/components/copyright/copyright.component.ts ***!
  \*************************************************************/
/*! exports provided: CopyrightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyrightComponent", function() { return CopyrightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CopyrightComponent {
    constructor() { }
    ngOnInit() {
    }
}
CopyrightComponent.ɵfac = function CopyrightComponent_Factory(t) { return new (t || CopyrightComponent)(); };
CopyrightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CopyrightComponent, selectors: [["app-copyright"]], decls: 6, vars: 0, consts: [[1, "copyright"], ["href", "#", 1, "copyright__link"]], template: function CopyrightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0412\u0441\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u044D\u0442\u043E\u0433\u043E \u0441\u0430\u0439\u0442\u0430 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0442 \u0435\u0433\u043E \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0443.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u043E\u0433\u043B\u0430\u0441\u0443\u0439\u0442\u0435 \u0441 \u0430\u0432\u0442\u043E\u0440\u043E\u043C \u043F\u0435\u0440\u0435\u0434 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " akalmeetkaur@akalmeetkaur.by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CopyrightComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-copyright',
                templateUrl: './copyright.component.html',
                styleUrls: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "IURz":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_aside_aside_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/aside/aside.service */ "++6k");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ "t99X");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class MainComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getAsideVisibility().subscribe(value => this.showOverlay = value);
        this.service.setAsideVisibility(!this.showOverlay);
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_aside_aside_service__WEBPACK_IMPORTED_MODULE_1__["AsideService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 4, vars: 2, consts: [[1, "main"], [1, "main__overlay"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("main__overlay_show", ctx.showOverlay);
    } }, directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: src_app_services_aside_aside_service__WEBPACK_IMPORTED_MODULE_1__["AsideService"] }]; }, null); })();


/***/ }),

/***/ "J9Qv":
/*!***************************************************************!*\
  !*** ./src/app/components/pagination/pagination.component.ts ***!
  \***************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");




const _c0 = function () { return ["fas", "long-arrow-alt-left"]; };
const _c1 = function () { return ["fas", "long-arrow-alt-right"]; };
class PaginationComponent {
    constructor(router, activeRoute) {
        this.router = router;
        this.activeRoute = activeRoute;
    }
    ngOnInit() {
        this.activeRoute.queryParamMap
            .subscribe(params => {
            this.page = Number(params.get('page'));
            this.router.navigate([], { queryParams: { page: this.page } });
        });
    }
    onNext() {
        if (this.page < this.pages) {
            this.router.navigate([], { queryParams: { page: ++this.page } });
        }
    }
    onPrev() {
        if (this.page > 0) {
            this.router.navigate([], { queryParams: { page: --this.page } });
        }
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["app-pagination"]], inputs: { pages: "pages" }, decls: 7, vars: 4, consts: [[1, "pagination"], [1, "pagination__arrow", 3, "click"], [3, "icon"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_a_click_1_listener() { return ctx.onPrev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u041D\u0430\u0437\u0430\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_a_click_4_listener() { return ctx.onNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0412\u043F\u0435\u0440\u0451\u0434 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]], styles: ["[_nghost-%COMP%] {\n      display: contents;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pagination',
                templateUrl: './pagination.component.html',
                styles: [`
    :host {
      display: contents;
    }
  `]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { pages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "JFIp":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_video_video_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/video/video.service */ "GMaO");
/* harmony import */ var src_app_services_section_section_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/section/section.service */ "Ux/M");
/* harmony import */ var src_app_components_cover_cover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/cover/cover.component */ "JOVU");
/* harmony import */ var _components_section_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/section/section.component */ "Rtmn");
/* harmony import */ var src_app_components_causes_causes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/causes/causes.component */ "iOYQ");
/* harmony import */ var _components_video_video_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/video/video.component */ "G4NA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_purchase_purchase_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/purchase/purchase.component */ "wRQo");










class HomePageComponent {
    constructor(videoService, sectionService) {
        this.videoService = videoService;
        this.sectionService = sectionService;
    }
    ngOnInit() {
        this.sectionService.getSections()
            .subscribe(sections => {
            this.sections = sections;
        });
        this.videoService.getVideos({ filter: {
                promo: true
            } })
            .subscribe(video => {
            this.videos = video.data;
        });
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_video_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_section_section_service__WEBPACK_IMPORTED_MODULE_2__["SectionService"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 13, vars: 3, consts: [[3, "sectionData"], [3, "videos"], [1, "video__item", "video__item_homepage"], [1, "video__title", "video__title_dark"], [1, "video__text", "video__text_dark"], ["routerLink", "/videos", 1, "button", "button_dark", "video__button"], [1, "hide-image", 3, "sectionData"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-causes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0412\u0438\u0434\u0435\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0421\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0438 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0443\u0439\u0442\u0435 \u0443\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u044F \u0438 \u043C\u0435\u0434\u0438\u0442\u0430\u0446\u0438\u0438, \u0438\u0437\u0443\u0447\u0430\u0439\u0442\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u043A \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044E \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u0438\u043A \u043A\u0443\u043D\u0434\u0430\u043B\u0438\u043D\u0438-\u0439\u043E\u0433\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0412\u0441\u0451 \u0432\u0438\u0434\u0435\u043E \u043A\u0443\u0440\u0441\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-purchase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sectionData", ctx.sections[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videos", ctx.videos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sectionData", ctx.sections[1]);
    } }, directives: [src_app_components_cover_cover_component__WEBPACK_IMPORTED_MODULE_3__["CoverComponent"], _components_section_section_component__WEBPACK_IMPORTED_MODULE_4__["SectionComponent"], src_app_components_causes_causes_component__WEBPACK_IMPORTED_MODULE_5__["CausesComponent"], _components_video_video_component__WEBPACK_IMPORTED_MODULE_6__["VideoComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _components_purchase_purchase_component__WEBPACK_IMPORTED_MODULE_8__["PurchaseComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: src_app_services_video_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"] }, { type: src_app_services_section_section_service__WEBPACK_IMPORTED_MODULE_2__["SectionService"] }]; }, null); })();


/***/ }),

/***/ "JOVU":
/*!*****************************************************!*\
  !*** ./src/app/components/cover/cover.component.ts ***!
  \*****************************************************/
/*! exports provided: CoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverComponent", function() { return CoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CoverComponent {
    constructor() { }
    ngOnInit() {
    }
}
CoverComponent.ɵfac = function CoverComponent_Factory(t) { return new (t || CoverComponent)(); };
CoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoverComponent, selectors: [["app-cover"]], decls: 12, vars: 0, consts: [[1, "cover"], [1, "cover__content"], [1, "cover__title"], [1, "cover__text"], ["href", "#", 1, "button", "button_blue", "cover__button"], [1, "cover__image"], ["src", "assets/images/photo_1.png", 1, "cover__picture"]], template: function CoverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041E\u043D\u043B\u0430\u0439\u043D \u043A\u0443\u0440\u0441\u044B \u043F\u043E\u00A0\u041A\u0443\u043D\u0434\u0430\u043B\u0438\u043D\u0438\u00A0\u0439\u043E\u0433\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041A\u0443\u043D\u0434\u0430\u043B\u0438\u043D\u0438 \u0439\u043E\u0433\u0430 - \u044D\u0442\u043E \u0442\u043E\u0442 \u043C\u043E\u0449\u043D\u044B\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043C\u0435\u043D\u044F\u0442\u044C \u0432\u0430\u0448\u0443 \u0436\u0438\u0437\u043D\u044C \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043E\u0442 \u0432\u043D\u0435\u0448\u043D\u0438\u0445 \u043E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u0441\u0442\u0432, \u0432\u0430\u0448\u0435\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F \u0437\u043D\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u0430 \u0441 \u0439\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430\u043C\u0438 \u0438 \u0442\u043E\u0433\u043E, \u043D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u044B \u0432\u0435\u0440\u0438\u0442\u0435 \u0432 \u0441\u0438\u043B\u0443 \u044D\u0442\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u0438. \u041D\u0430 \u044D\u0442\u043E\u043C \u0440\u0435\u0441\u0443\u0440\u0441\u0435 \u0432\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0441 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u043C\u0438 \u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u043A\u043B\u0430\u0441\u0441\u0430\u043C\u0438 \u043F\u043E \u041A\u0443\u043D\u0434\u0430\u043B\u0438\u043D\u0438 \u0439\u043E\u0433\u0435, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0441\u0442\u0438 \u0446\u0435\u043B\u044B\u0439 \u043A\u0443\u0440\u0441 \u0434\u043B\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u0430\u0448\u0435\u0433\u043E, \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0430.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u0421\u0430\u0442 \u041D\u0430\u043C!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041A\u0443\u043F\u0438\u0442\u044C \u043A\u0443\u0440\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cover',
                templateUrl: './cover.component.html',
                styleUrls: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "KhKd":
/*!**************************************************!*\
  !*** ./src/app/components/video/video.module.ts ***!
  \**************************************************/
/*! exports provided: VideoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoModule", function() { return VideoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _video_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video.component */ "G4NA");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");








class VideoModule {
    constructor(library) {
        this.library = library;
        library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimes"]);
    }
}
VideoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VideoModule });
VideoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VideoModule_Factory(t) { return new (t || VideoModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconLibrary"])); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_5__["YouTubePlayerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VideoModule, { declarations: [_video_component__WEBPACK_IMPORTED_MODULE_2__["VideoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_5__["YouTubePlayerModule"]], exports: [_video_component__WEBPACK_IMPORTED_MODULE_2__["VideoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_video_component__WEBPACK_IMPORTED_MODULE_2__["VideoComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                    _angular_youtube_player__WEBPACK_IMPORTED_MODULE_5__["YouTubePlayerModule"]
                ],
                exports: [_video_component__WEBPACK_IMPORTED_MODULE_2__["VideoComponent"]]
            }]
    }], function () { return [{ type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconLibrary"] }]; }, null); })();


/***/ }),

/***/ "LXzy":
/*!**********************************************************!*\
  !*** ./src/app/components/copyright/copyright.module.ts ***!
  \**********************************************************/
/*! exports provided: CopyrightModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyrightModule", function() { return CopyrightModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _copyright_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./copyright.component */ "Hbxp");




class CopyrightModule {
}
CopyrightModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CopyrightModule });
CopyrightModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CopyrightModule_Factory(t) { return new (t || CopyrightModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CopyrightModule, { declarations: [_copyright_component__WEBPACK_IMPORTED_MODULE_2__["CopyrightComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_copyright_component__WEBPACK_IMPORTED_MODULE_2__["CopyrightComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CopyrightModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_copyright_component__WEBPACK_IMPORTED_MODULE_2__["CopyrightComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_copyright_component__WEBPACK_IMPORTED_MODULE_2__["CopyrightComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../copyright/copyright.component */ "Hbxp");



class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 11, vars: 0, consts: [[1, "footer"], [1, "footer__content"], ["routerLink", "/home", 1, "logo"], ["src", "./assets/images/logo_flower_gray.svg", 1, "logo__image", "logo__image_gray"], [1, "logo__text"], [1, "logo__text", "logo__text_big", "logo__text_gray"], [1, "logo__text", "logo__text_small_gray"], [1, "footer__item"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "akalmeetkaur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-copyright");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_copyright_copyright_component__WEBPACK_IMPORTED_MODULE_1__["CopyrightComponent"]], styles: ["[_nghost-%COMP%]{\n      display: block\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styles: [`
    :host{
      display: block
    }
  `]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MfBH":
/*!**************************************************************!*\
  !*** ./src/app/pages/library-page/library-page.component.ts ***!
  \**************************************************************/
/*! exports provided: LibraryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryPageComponent", function() { return LibraryPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_components_book_book_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/book/book.component */ "ROCj");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ "zBoC");




class LibraryPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
LibraryPageComponent.ɵfac = function LibraryPageComponent_Factory(t) { return new (t || LibraryPageComponent)(); };
LibraryPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LibraryPageComponent, selectors: [["app-library-page"]], decls: 4, vars: 0, consts: [[1, "main__title"]], template: function LibraryPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidebar");
    } }, directives: [src_app_components_book_book_component__WEBPACK_IMPORTED_MODULE_1__["BookComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LibraryPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-library-page',
                templateUrl: './library-page.component.html',
                styleUrls: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MsaL":
/*!****************************************************!*\
  !*** ./src/app/components/burger/burger.module.ts ***!
  \****************************************************/
/*! exports provided: BurgerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurgerModule", function() { return BurgerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _burger_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./burger.component */ "lGq+");







class BurgerModule {
    constructor(library) {
        this.library = library;
        library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBars"]);
    }
}
BurgerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BurgerModule });
BurgerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BurgerModule_Factory(t) { return new (t || BurgerModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconLibrary"])); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BurgerModule, { declarations: [_burger_component__WEBPACK_IMPORTED_MODULE_4__["BurgerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]], exports: [_burger_component__WEBPACK_IMPORTED_MODULE_4__["BurgerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BurgerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_burger_component__WEBPACK_IMPORTED_MODULE_4__["BurgerComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]
                ],
                exports: [_burger_component__WEBPACK_IMPORTED_MODULE_4__["BurgerComponent"]]
            }]
    }], function () { return [{ type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconLibrary"] }]; }, null); })();


/***/ }),

/***/ "O43q":
/*!************************************************************!*\
  !*** ./src/app/components/pagination/pagination.module.ts ***!
  \************************************************************/
/*! exports provided: PaginationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return PaginationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination.component */ "J9Qv");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");







class PaginationModule {
    constructor(library) {
        this.library = library;
        library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faLongArrowAltRight"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faLongArrowAltLeft"]);
    }
}
PaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PaginationModule });
PaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PaginationModule_Factory(t) { return new (t || PaginationModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconLibrary"])); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaginationModule, { declarations: [_pagination_component__WEBPACK_IMPORTED_MODULE_2__["PaginationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]], exports: [_pagination_component__WEBPACK_IMPORTED_MODULE_2__["PaginationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_pagination_component__WEBPACK_IMPORTED_MODULE_2__["PaginationComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]
                ],
                exports: [_pagination_component__WEBPACK_IMPORTED_MODULE_2__["PaginationComponent"]]
            }]
    }], function () { return [{ type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconLibrary"] }]; }, null); })();


/***/ }),

/***/ "PfyA":
/*!***********************************************!*\
  !*** ./src/app/services/book/book.service.ts ***!
  \***********************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class BookService {
    constructor() {
        this.limit = 4;
        this.books = [
            {
                id: 0,
                title: 'Дыши. Практики счастья',
                text: 'Ты стремишься к максимальной продуктивности, выполняешь одно дело за другим, гордишься многозадачностью и расписываешь свой день по минутам? Кажется, пора глубоко вдохнуть и нажать на паузу. Такая гонка не принесет ничего, кроме болезней, бессонницы и чувства тревоги. В тренде — спокойная, осознанная и счастливая жизнь.',
                imageUrl: './assets/images/book.png'
            },
            {
                id: 1,
                title: 'Стресс как внутренняя игра',
                text: 'Автор идеи о Внутренней игре Тимоти Голви показывает, как она помогает освободиться от стресса и играть в полную силу, будь то в спорте, на работе или в жизни в целом.',
                imageUrl: './assets/images/book.png'
            },
            {
                id: 2,
                title: 'Осознанность',
                text: 'Это книга об осознанной медитации, на которой основана реально работающая терапия, разработанная автором и его коллегами из Оксфордского университета. Эта методика, не только способствует излечению и предупреждению депрессий, но и помогает справиться с вызовами современного ритма жизни.',
                imageUrl: './assets/images/book.png'
            },
            {
                id: 3,
                title: 'Магия утра',
                text: 'Утренние ритуалы, которые предлагает осуществлять автор этой книги, помогли десяткам тысяч людей изменить свою жизнь, почувствовать себя лучше и успевать больше. Из книги вы узнаете, как первый час дня определяет ваш успех и позволяет вам раскрыть свой потенциал полностью.',
                imageUrl: './assets/images/book.png'
            },
            {
                id: 4,
                title: 'Движ ночи',
                text: 'Ночные тусоки, которые предлагает осуществлять автор этой книги, помогли десяткам тысяч людей изменить свою жизнь, почувствовать себя лучше и успевать больше. Из книги вы узнаете, как сделать чтобы первый час дня после ночной тусы не стал последним.',
                imageUrl: './assets/images/book.png'
            },
        ];
    }
    getBooks(page) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
            data: this.books.filter(book => {
                return book.id >= page * this.limit && book.id < page * this.limit + this.limit;
            }),
            limit: this.limit,
            count: this.books.length
        });
    }
}
BookService.ɵfac = function BookService_Factory(t) { return new (t || BookService)(); };
BookService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BookService, factory: BookService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "QtF9":
/*!************************************************!*\
  !*** ./src/app/components/main/main.module.ts ***!
  \************************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.component */ "IURz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_pages_blog_page_blog_page_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/blog-page/blog-page.module */ "wwRA");
/* harmony import */ var src_app_pages_video_page_video_page_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/video-page/video-page.module */ "/SmA");
/* harmony import */ var src_app_pages_library_page_library_page_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/library-page/library-page.module */ "U4j7");
/* harmony import */ var src_app_pages_home_page_home_page_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pages/home-page/home-page.module */ "ry1Y");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ "t99X");











class MainModule {
}
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            src_app_pages_blog_page_blog_page_module__WEBPACK_IMPORTED_MODULE_5__["BlogPageModule"],
            src_app_pages_video_page_video_page_module__WEBPACK_IMPORTED_MODULE_6__["VideoPageModule"],
            src_app_pages_library_page_library_page_module__WEBPACK_IMPORTED_MODULE_7__["LibraryPageModule"],
            src_app_pages_home_page_home_page_module__WEBPACK_IMPORTED_MODULE_8__["HomePageModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        src_app_pages_blog_page_blog_page_module__WEBPACK_IMPORTED_MODULE_5__["BlogPageModule"],
        src_app_pages_video_page_video_page_module__WEBPACK_IMPORTED_MODULE_6__["VideoPageModule"],
        src_app_pages_library_page_library_page_module__WEBPACK_IMPORTED_MODULE_7__["LibraryPageModule"],
        src_app_pages_home_page_home_page_module__WEBPACK_IMPORTED_MODULE_8__["HomePageModule"]], exports: [_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
                    _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    src_app_pages_blog_page_blog_page_module__WEBPACK_IMPORTED_MODULE_5__["BlogPageModule"],
                    src_app_pages_video_page_video_page_module__WEBPACK_IMPORTED_MODULE_6__["VideoPageModule"],
                    src_app_pages_library_page_library_page_module__WEBPACK_IMPORTED_MODULE_7__["LibraryPageModule"],
                    src_app_pages_home_page_home_page_module__WEBPACK_IMPORTED_MODULE_8__["HomePageModule"]
                ],
                exports: [_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ROCj":
/*!***************************************************!*\
  !*** ./src/app/components/book/book.component.ts ***!
  \***************************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_book_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/book/book.service */ "PfyA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pagination/pagination.component */ "J9Qv");






function BookComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", book_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](book_r1.text);
} }
class BookComponent {
    constructor(service, activeRoute) {
        this.service = service;
        this.activeRoute = activeRoute;
    }
    ngOnInit() {
        this.activeRoute.queryParamMap.subscribe(paramsMap => {
            this.service.getBooks(Number(paramsMap.get('page')))
                .subscribe(books => {
                this.books = books.data;
                this.pages = Math.floor(books.count / books.limit);
            });
        });
    }
}
BookComponent.ɵfac = function BookComponent_Factory(t) { return new (t || BookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_book_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
BookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookComponent, selectors: [["app-book"]], decls: 3, vars: 2, consts: [[1, "book"], ["class", "book__item", 4, "ngFor", "ngForOf"], [3, "pages"], [1, "book__item"], [1, "book__image"], [1, "book__picture", 3, "src"], [1, "book__title"], [1, "book__text"]], template: function BookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookComponent_div_1_Template, 7, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-pagination", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.books);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pages", ctx.pages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__["PaginationComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-book',
                templateUrl: './book.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: src_app_services_book_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "Rtmn":
/*!*********************************************************!*\
  !*** ./src/app/components/section/section.component.ts ***!
  \*********************************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



const _c0 = ["*"];
class SectionComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    get sectionText() {
        return this.sanitizer.bypassSecurityTrustHtml(this.sectionData.text);
    }
}
SectionComponent.ɵfac = function SectionComponent_Factory(t) { return new (t || SectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionComponent, selectors: [["app-section"]], inputs: { sectionData: "sectionData" }, ngContentSelectors: _c0, decls: 15, vars: 8, consts: [[1, "section"], [1, "section__image"], [1, "section__picture"], ["media", "(max-width: 767px)", 3, "srcset"], ["media", "(max-width: 1023px)", 3, "srcset"], ["media", "(max-width: 1439px)", 3, "srcset"], ["media", "(min-width: 1440px)", 3, "srcset"], [3, "src"], [1, "section__content"], [1, "section__title"], [1, "section__text", "section__text_gray"], [1, "section__text", 3, "innerHTML"]], template: function SectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "picture", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "source", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "source", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "source", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("srcset", "assets/images/", ctx.sectionData.imageFileName, "_280w.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("srcset", "assets/images/", ctx.sectionData.imageFileName, "_356w.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("srcset", "assets/images/", ctx.sectionData.imageFileName, "_460w.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("srcset", "assets/images/", ctx.sectionData.imageFileName, "_580w.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/", ctx.sectionData.imageFileName, "_580w.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sectionData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sectionData.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.sectionText, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: ["@media screen and (min-width: 320px) and (max-width: 767px) {\n      .hide-image[_nghost-%COMP%]   .section__image[_ngcontent-%COMP%], .hide-image   [_nghost-%COMP%]   .section__image[_ngcontent-%COMP%] {\n        display: none;\n      }\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-section',
                templateUrl: './section.component.html',
                styles: [`
    @media screen and (min-width: 320px) and (max-width: 767px) {
      :host-context(.hide-image) .section__image {
        display: none;
      }
    }
  `]
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, { sectionData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sbb6":
/*!*************************************************************!*\
  !*** ./src/app/pages/blog-page/blog-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: BlogPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPageRoutingModule", function() { return BlogPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _blog_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog-page.component */ "X7Zm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





const routes = [
    {
        path: '',
        component: _blog_page_component__WEBPACK_IMPORTED_MODULE_1__["BlogPageComponent"]
    },
    {
        path: 'article/:id',
        data: {
            breadcrumb: 'Статья'
        },
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-components-article-article-module */ "src-app-components-article-article-module").then(__webpack_require__.bind(null, /*! src/app/components/article/article.module */ "vEhw"))
            .then(m => m.ArticleModule)
    }
];
class BlogPageRoutingModule {
}
BlogPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BlogPageRoutingModule });
BlogPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BlogPageRoutingModule_Factory(t) { return new (t || BlogPageRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_aside_aside_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/aside/aside.component */ "2X6e");






class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-aside");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _components_aside_aside_component__WEBPACK_IMPORTED_MODULE_4__["AsideComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], null, null); })();


/***/ }),

/***/ "U4j7":
/*!***********************************************************!*\
  !*** ./src/app/pages/library-page/library-page.module.ts ***!
  \***********************************************************/
/*! exports provided: LibraryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryPageModule", function() { return LibraryPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_components_book_book_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/book/book.component */ "ROCj");
/* harmony import */ var _library_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./library-page.component */ "MfBH");
/* harmony import */ var _library_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./library-page-routing.module */ "6zUO");
/* harmony import */ var src_app_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/sidebar/sidebar.module */ "zWxg");
/* harmony import */ var src_app_components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/pagination/pagination.module */ "O43q");








class LibraryPageModule {
}
LibraryPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LibraryPageModule });
LibraryPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LibraryPageModule_Factory(t) { return new (t || LibraryPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _library_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["LibraryPageRoutingModule"],
            src_app_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_5__["SidebarModule"],
            src_app_components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LibraryPageModule, { declarations: [_library_page_component__WEBPACK_IMPORTED_MODULE_3__["LibraryPageComponent"],
        src_app_components_book_book_component__WEBPACK_IMPORTED_MODULE_2__["BookComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _library_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["LibraryPageRoutingModule"],
        src_app_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_5__["SidebarModule"],
        src_app_components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LibraryPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _library_page_component__WEBPACK_IMPORTED_MODULE_3__["LibraryPageComponent"],
                    src_app_components_book_book_component__WEBPACK_IMPORTED_MODULE_2__["BookComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _library_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["LibraryPageRoutingModule"],
                    src_app_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_5__["SidebarModule"],
                    src_app_components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Ux/M":
/*!*****************************************************!*\
  !*** ./src/app/services/section/section.service.ts ***!
  \*****************************************************/
/*! exports provided: SectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionService", function() { return SectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class SectionService {
    constructor() {
        this.sections = [
            {
                imageFileName: 'photo_2',
                title: 'Вероника Голубенкова',
                subtitle: 'преподаватель Кундалини йоги',
                text: `
      <p>Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).</p>
      <p>Прошла обучение в школе Кундалини Йоги АМРИТ НАМ САРОВАР и стала сертифицированным преподавателем Кундалини йоги Уровень I (KRI). Обучалась у Карта Сингха (Франция), Биби Нанаки Каур (Германия), Джоды Каур (Германия), Кальян Сингха (Александр Куликов, Россия), Амрит Садханы Каур (Татьяна Терентьева, Россия), Меэра Сингха (Алексей Меркулов, Россия), Прабу Джап Сингха (Алексей Владовский, Россия).</p>
      <p>В 2013 году прошла курс випасаны в традиции Саяджи У Ба Кхина (С.Н.Гоенка) в Латвии.</p>
      <p>В 2018 году закончила обучение на курсе подготовки учителей по Шакти Данс.</p>
      <p>Для Вероники йога - это способ жить счастливой и наполненной жизнью, в соответствии со своим внутренним миром и в состоянии полной гармонии. </p>
      `
            },
            {
                imageFileName: 'photo_3',
                title: 'Видеокурс Кундалини йога для начинающих',
                text: `
      <p>В рамках этого курса вы познакомитесь с теоретическими и практическими основами Кундалини йоги, узнаете как правильно и безопасно практиковать самостоятельно, изучите основные техники и на собственном опыте прочувствуете, как эти техники работают и как их можно применять в повседневной жизни.</p>
      <p>Курс состоит из 7 видео уроков и полезных материалов, среди которых 2 фундаментальные последовательности Кундалини йоги для последующей регулярных самостоятельной практики.</p>
      `
            },
        ];
    }
    getSections() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.sections);
    }
}
SectionService.ɵfac = function SectionService_Factory(t) { return new (t || SectionService)(); };
SectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SectionService, factory: SectionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "WinS":
/*!****************************************************!*\
  !*** ./src/app/components/header/header.module.ts ***!
  \****************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu/menu.module */ "Z/MT");
/* harmony import */ var _social_social_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../social/social.module */ "vK3j");
/* harmony import */ var _burger_burger_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../burger/burger.module */ "MsaL");








class HeaderModule {
}
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HeaderModule_Factory(t) { return new (t || HeaderModule)(); }, imports: [[
            _burger_burger_module__WEBPACK_IMPORTED_MODULE_6__["BurgerModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _menu_menu_module__WEBPACK_IMPORTED_MODULE_4__["MenuModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _social_social_module__WEBPACK_IMPORTED_MODULE_5__["SocialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]], imports: [_burger_burger_module__WEBPACK_IMPORTED_MODULE_6__["BurgerModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _menu_menu_module__WEBPACK_IMPORTED_MODULE_4__["MenuModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _social_social_module__WEBPACK_IMPORTED_MODULE_5__["SocialModule"]], exports: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]
                ],
                imports: [
                    _burger_burger_module__WEBPACK_IMPORTED_MODULE_6__["BurgerModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _menu_menu_module__WEBPACK_IMPORTED_MODULE_4__["MenuModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _social_social_module__WEBPACK_IMPORTED_MODULE_5__["SocialModule"]
                ],
                exports: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "X7Zm":
/*!********************************************************!*\
  !*** ./src/app/pages/blog-page/blog-page.component.ts ***!
  \********************************************************/
/*! exports provided: BlogPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPageComponent", function() { return BlogPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_components_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/article-list/article-list.component */ "erOe");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ "zBoC");




class BlogPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogPageComponent.ɵfac = function BlogPageComponent_Factory(t) { return new (t || BlogPageComponent)(); };
BlogPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogPageComponent, selectors: [["app-blog-page"]], decls: 4, vars: 0, consts: [[1, "main__title"]], template: function BlogPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0411\u043B\u043E\u0433");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-article-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidebar");
    } }, directives: [src_app_components_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_1__["ArticleListComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog-page',
                templateUrl: './blog-page.component.html',
                styleUrls: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XXG4":
/*!**************************************************!*\
  !*** ./src/app/components/aside/aside.module.ts ***!
  \**************************************************/
/*! exports provided: AsideModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideModule", function() { return AsideModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _aside_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aside.component */ "2X6e");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu/menu.module */ "Z/MT");
/* harmony import */ var _social_social_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../social/social.module */ "vK3j");
/* harmony import */ var _copyright_copyright_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../copyright/copyright.module */ "LXzy");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");











class AsideModule {
    constructor(library) {
        this.library = library;
        library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faTimes"]);
    }
}
AsideModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AsideModule });
AsideModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AsideModule_Factory(t) { return new (t || AsideModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconLibrary"])); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _copyright_copyright_module__WEBPACK_IMPORTED_MODULE_6__["CopyrightModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            _menu_menu_module__WEBPACK_IMPORTED_MODULE_4__["MenuModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _social_social_module__WEBPACK_IMPORTED_MODULE_5__["SocialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AsideModule, { declarations: [_aside_component__WEBPACK_IMPORTED_MODULE_2__["AsideComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _copyright_copyright_module__WEBPACK_IMPORTED_MODULE_6__["CopyrightModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
        _menu_menu_module__WEBPACK_IMPORTED_MODULE_4__["MenuModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _social_social_module__WEBPACK_IMPORTED_MODULE_5__["SocialModule"]], exports: [_aside_component__WEBPACK_IMPORTED_MODULE_2__["AsideComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsideModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_aside_component__WEBPACK_IMPORTED_MODULE_2__["AsideComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _copyright_copyright_module__WEBPACK_IMPORTED_MODULE_6__["CopyrightModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                    _menu_menu_module__WEBPACK_IMPORTED_MODULE_4__["MenuModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _social_social_module__WEBPACK_IMPORTED_MODULE_5__["SocialModule"]
                ],
                exports: [_aside_component__WEBPACK_IMPORTED_MODULE_2__["AsideComponent"]]
            }]
    }], function () { return [{ type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconLibrary"] }]; }, null); })();


/***/ }),

/***/ "Yj4x":
/*!****************************************************!*\
  !*** ./src/app/components/footer/footer.module.ts ***!
  \****************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component */ "LmEr");
/* harmony import */ var _copyright_copyright_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../copyright/copyright.module */ "LXzy");





class FooterModule {
}
FooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FooterModule });
FooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FooterModule_Factory(t) { return new (t || FooterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _copyright_copyright_module__WEBPACK_IMPORTED_MODULE_3__["CopyrightModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FooterModule, { declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _copyright_copyright_module__WEBPACK_IMPORTED_MODULE_3__["CopyrightModule"]], exports: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _copyright_copyright_module__WEBPACK_IMPORTED_MODULE_3__["CopyrightModule"]
                ],
                exports: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Z/MT":
/*!************************************************!*\
  !*** ./src/app/components/menu/menu.module.ts ***!
  \************************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.component */ "0oYm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class MenuModule {
}
MenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MenuModule });
MenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MenuModule_Factory(t) { return new (t || MenuModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MenuModule, { declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                ],
                exports: [_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_main_main_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main/main.module */ "QtF9");
/* harmony import */ var _components_header_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.module */ "WinS");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.module */ "Yj4x");
/* harmony import */ var _components_aside_aside_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/aside/aside.module */ "XXG4");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _components_aside_aside_module__WEBPACK_IMPORTED_MODULE_8__["AsideModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _components_header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"],
            _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"],
            _components_main_main_module__WEBPACK_IMPORTED_MODULE_5__["MainModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["RoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_components_aside_aside_module__WEBPACK_IMPORTED_MODULE_8__["AsideModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _components_header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"],
        _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"],
        _components_main_main_module__WEBPACK_IMPORTED_MODULE_5__["MainModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["RoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                ],
                imports: [
                    _components_aside_aside_module__WEBPACK_IMPORTED_MODULE_8__["AsideModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _components_header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"],
                    _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"],
                    _components_main_main_module__WEBPACK_IMPORTED_MODULE_5__["MainModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["RoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cuKy":
/*!***************************************************************!*\
  !*** ./src/app/pages/video-page/video-page-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: VideoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPageRoutingModule", function() { return VideoPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _video_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video-page.component */ "liVU");





const routes = [
    {
        path: '',
        component: _video_page_component__WEBPACK_IMPORTED_MODULE_2__["VideoPageComponent"]
    }
];
class VideoPageRoutingModule {
}
VideoPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VideoPageRoutingModule });
VideoPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VideoPageRoutingModule_Factory(t) { return new (t || VideoPageRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VideoPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "erOe":
/*!*******************************************************************!*\
  !*** ./src/app/components/article-list/article-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ArticleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return ArticleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_article_article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/article/article.service */ "qtg7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pagination/pagination.component */ "J9Qv");






const _c0 = function (a1) { return ["article", a1]; };
function ArticleListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", article_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, article_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r1.title);
} }
class ArticleListComponent {
    constructor(service, activeRoute) {
        this.service = service;
        this.activeRoute = activeRoute;
    }
    ngOnInit() {
        this.activeRoute.queryParamMap.subscribe(paramsMap => {
            this.service.getArticles(Number(paramsMap.get('page'))).subscribe(articles => {
                this.articles = articles.data;
                this.pages = Math.floor(articles.count / articles.limit);
            });
        });
    }
}
ArticleListComponent.ɵfac = function ArticleListComponent_Factory(t) { return new (t || ArticleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_article_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ArticleListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleListComponent, selectors: [["app-article-list"]], decls: 3, vars: 2, consts: [[1, "article-list"], ["class", "article-list__item", 4, "ngFor", "ngForOf"], [3, "pages"], [1, "article-list__item"], [1, "article-list__image"], [1, "article-list__picture", 3, "src"], [1, "article-list__date"], [1, "article-list__title", 3, "routerLink"]], template: function ArticleListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArticleListComponent_div_1_Template, 7, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-pagination", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pages", ctx.pages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__["PaginationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article-list',
                templateUrl: './article-list.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: src_app_services_article_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "iOYQ":
/*!*******************************************************!*\
  !*** ./src/app/components/causes/causes.component.ts ***!
  \*******************************************************/
/*! exports provided: CausesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CausesComponent", function() { return CausesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_causes_causes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/causes/causes.service */ "xkzH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CausesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cause_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cause_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cause_r1.text);
} }
class CausesComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getCauses()
            .subscribe(causes => {
            this.causes = causes;
        });
    }
}
CausesComponent.ɵfac = function CausesComponent_Factory(t) { return new (t || CausesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_causes_causes_service__WEBPACK_IMPORTED_MODULE_1__["CausesService"])); };
CausesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CausesComponent, selectors: [["app-causes"]], decls: 5, vars: 1, consts: [[1, "causes"], [1, "causes__wrapper"], [1, "causes__header"], ["class", "causes__item", 4, "ngFor", "ngForOf"], [1, "causes__item"], [1, "causes__title"], [1, "causes__text"]], template: function CausesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041F\u0440\u0438\u0447\u0438\u043D\u044B \u043F\u0440\u043E\u0439\u0442\u0438 \u043A\u0443\u0440\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CausesComponent_div_4_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.causes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CausesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-causes',
                templateUrl: './causes.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: src_app_services_causes_causes_service__WEBPACK_IMPORTED_MODULE_1__["CausesService"] }]; }, null); })();


/***/ }),

/***/ "khes":
/*!*************************************************************!*\
  !*** ./src/app/pages/home-page/home-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page.component */ "JFIp");





const routes = [
    {
        path: '',
        component: _home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"]
    }
];
class HomePageRoutingModule {
}
HomePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomePageRoutingModule });
HomePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomePageRoutingModule_Factory(t) { return new (t || HomePageRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "lGq+":
/*!*******************************************************!*\
  !*** ./src/app/components/burger/burger.component.ts ***!
  \*******************************************************/
/*! exports provided: BurgerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurgerComponent", function() { return BurgerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_aside_aside_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/aside/aside.service */ "++6k");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");




const _c0 = function () { return ["fas", "bars"]; };
class BurgerComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
    }
    onClick(event) {
        event.preventDefault();
        this.service.getAsideVisibility().subscribe(value => this.asideVisible = value);
        this.service.setAsideVisibility(!this.asideVisible);
    }
}
BurgerComponent.ɵfac = function BurgerComponent_Factory(t) { return new (t || BurgerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_aside_aside_service__WEBPACK_IMPORTED_MODULE_1__["AsideService"])); };
BurgerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BurgerComponent, selectors: [["app-burger"]], decls: 2, vars: 2, consts: [[1, "burger", 3, "click"], [3, "icon"]], template: function BurgerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BurgerComponent_Template_a_click_0_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BurgerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-burger',
                templateUrl: './burger.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: src_app_services_aside_aside_service__WEBPACK_IMPORTED_MODULE_1__["AsideService"] }]; }, null); })();


/***/ }),

/***/ "liVU":
/*!**********************************************************!*\
  !*** ./src/app/pages/video-page/video-page.component.ts ***!
  \**********************************************************/
/*! exports provided: VideoPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPageComponent", function() { return VideoPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_video_video_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/video/video.service */ "GMaO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_video_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/video/video.component */ "G4NA");
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/pagination/pagination.component */ "J9Qv");






class VideoPageComponent {
    constructor(service, activeRoute) {
        this.service = service;
        this.activeRoute = activeRoute;
    }
    ngOnInit() {
        this.activeRoute.queryParamMap.subscribe(paramsMap => {
            this.service.getVideos({ filter: {
                    page: Number(paramsMap.get('page'))
                } })
                .subscribe(video => {
                this.videos = video.data;
                this.pages = Math.floor(video.count / video.limit);
            });
        });
    }
}
VideoPageComponent.ɵfac = function VideoPageComponent_Factory(t) { return new (t || VideoPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_video_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
VideoPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoPageComponent, selectors: [["app-video-page"]], decls: 4, vars: 2, consts: [[1, "main__title"], [3, "videos"], [3, "pages"]], template: function VideoPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0438\u0434\u0435\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-pagination", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videos", ctx.videos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pages", ctx.pages);
    } }, directives: [_components_video_video_component__WEBPACK_IMPORTED_MODULE_3__["VideoComponent"], _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__["PaginationComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-video-page',
                templateUrl: './video-page.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: src_app_services_video_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "m6Gv":
/*!********************************************************!*\
  !*** ./src/app/components/purchase/purchase.module.ts ***!
  \********************************************************/
/*! exports provided: PurchaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseModule", function() { return PurchaseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _purchase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./purchase.component */ "wRQo");
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../email/email.component */ "0fkH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class PurchaseModule {
}
PurchaseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PurchaseModule });
PurchaseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PurchaseModule_Factory(t) { return new (t || PurchaseModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PurchaseModule, { declarations: [_purchase_component__WEBPACK_IMPORTED_MODULE_2__["PurchaseComponent"],
        _email_email_component__WEBPACK_IMPORTED_MODULE_3__["EmailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]], exports: [_purchase_component__WEBPACK_IMPORTED_MODULE_2__["PurchaseComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _purchase_component__WEBPACK_IMPORTED_MODULE_2__["PurchaseComponent"],
                    _email_email_component__WEBPACK_IMPORTED_MODULE_3__["EmailComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
                ],
                exports: [_purchase_component__WEBPACK_IMPORTED_MODULE_2__["PurchaseComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "nJq9":
/*!*******************************************************!*\
  !*** ./src/app/components/social/social.component.ts ***!
  \*******************************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");



const _c0 = function () { return ["fab", "facebook-f"]; };
const _c1 = function () { return ["fab", "instagram"]; };
const _c2 = function () { return ["fab", "youtube"]; };
class SocialComponent {
    constructor() { }
    ngOnInit() { }
}
SocialComponent.ɵfac = function SocialComponent_Factory(t) { return new (t || SocialComponent)(); };
SocialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialComponent, selectors: [["app-social"]], decls: 7, vars: 6, consts: [[1, "social"], ["href", "https://www.facebook.com/", 1, "social__link"], [3, "icon"], ["href", "https://www.instagram.com/", 1, "social__link"], ["href", "https://www.youtube.com/", 1, "social__link"]], template: function SocialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FaIconComponent"]], styles: ["[_nghost-%COMP%] {\n      display: contents;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-social',
                templateUrl: './social.component.html',
                styles: [`
    :host {
      display: contents;
    }
  `]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qtg7":
/*!*****************************************************!*\
  !*** ./src/app/services/article/article.service.ts ***!
  \*****************************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ArticleService {
    constructor() {
        this.limit = 6;
        this.articles = [
            {
                id: 0,
                imageUrl: './assets/images/photo_1.png',
                title: 'Что такое Шакти-данс?',
                date: '04.03.2019',
                content: [
                    {
                        text: `
          <p>Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).</p>
          <p>Прошла обучение в школе Кундалини Йоги АМРИТ НАМ САРОВАР и стала сертифицированным преподавателем Кундалини йоги Уровень I (KRI). Обучалась у Карта Сингха (Франция), Биби Нанаки Каур (Германия), Джоды Каур (Германия), Кальян Сингха (Александр Куликов, Россия), Амрит Садханы Каур (Татьяна Терентьева, Россия), Меэра Сингха (Алексей Меркулов, Россия), Прабу Джап Сингха (Алексей Владовский, Россия).</p>
          <p>В 2013 году прошла курс випасаны в традиции <a class="article__link" href="#">Саяджи У Ба Кхина</a> (С.Н.Гоенка) в Латвии.<br> В 2018 году закончила обучение на курсе подготовки учителей по Шакти Данс.</p>
          <p>Для Вероники йога - это способ жить счастливой и наполненной жизнью, в соответствии со своим внутренним миром и в состоянии полной гармонии. </p>
          `,
                        imageUrl: './assets/images/article_image_1.jpg',
                    },
                    {
                        text: `
          <p>Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).</p>
          <p>Прошла обучение в школе Кундалини Йоги АМРИТ НАМ САРОВАР и стала сертифицированным преподавателем Кундалини йоги Уровень I (KRI). Обучалась у Карта Сингха (Франция), Биби Нанаки Каур (Германия), Джоды Каур (Германия), Кальян Сингха (Александр Куликов, Россия), Амрит Садханы Каур (Татьяна Терентьева, Россия), Меэра Сингха (Алексей Меркулов, Россия), Прабу Джап Сингха (Алексей Владовский, Россия).</p>
          <p>В 2013 году прошла курс випасаны в традиции Саяджи У Ба Кхина (С.Н.Гоенка) в Латвии.<br> В 2018 году закончила обучение на курсе подготовки учителей по Шакти Данс.</p>
          <p>Для Вероники йога - это способ жить счастливой и наполненной жизнью, в соответствии со своим внутренним миром и в состоянии полной гармонии. </p>
          `,
                    }
                ]
            },
            {
                id: 1,
                imageUrl: './assets/images/photo_1.png',
                title: 'Гнев',
                date: '06.03.2019',
                content: [
                    {
                        text: `
          <p>Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).</p>
          <p>Прошла обучение в школе Кундалини Йоги АМРИТ НАМ САРОВАР и стала сертифицированным преподавателем Кундалини йоги Уровень I (KRI). Обучалась у Карта Сингха (Франция), Биби Нанаки Каур (Германия), Джоды Каур (Германия), Кальян Сингха (Александр Куликов, Россия), Амрит Садханы Каур (Татьяна Терентьева, Россия), Меэра Сингха (Алексей Меркулов, Россия), Прабу Джап Сингха (Алексей Владовский, Россия).</p>
          <p>В 2013 году прошла курс випасаны в традиции <a class="article__link" href="#">Саяджи У Ба Кхина</a> (С.Н.Гоенка) в Латвии.<br> В 2018 году закончила обучение на курсе подготовки учителей по Шакти Данс.</p>
          <p>Для Вероники йога - это способ жить счастливой и наполненной жизнью, в соответствии со своим внутренним миром и в состоянии полной гармонии. </p>
          `,
                        imageUrl: './assets/images/article_image_1.jpg',
                    },
                    {
                        text: `
          <p>Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).</p>
          <p>Прошла обучение в школе Кундалини Йоги АМРИТ НАМ САРОВАР и стала сертифицированным преподавателем Кундалини йоги Уровень I (KRI). Обучалась у Карта Сингха (Франция), Биби Нанаки Каур (Германия), Джоды Каур (Германия), Кальян Сингха (Александр Куликов, Россия), Амрит Садханы Каур (Татьяна Терентьева, Россия), Меэра Сингха (Алексей Меркулов, Россия), Прабу Джап Сингха (Алексей Владовский, Россия).</p>
          <p>В 2013 году прошла курс випасаны в традиции Саяджи У Ба Кхина (С.Н.Гоенка) в Латвии.<br> В 2018 году закончила обучение на курсе подготовки учителей по Шакти Данс.</p>
          <p>Для Вероники йога - это способ жить счастливой и наполненной жизнью, в соответствии со своим внутренним миром и в состоянии полной гармонии. </p>
          `,
                    }
                ]
            },
            {
                id: 2,
                imageUrl: './assets/images/photo_2_580w.jpg',
                title: 'Как с помощью дыхания избавиться от вредных привычек и не только',
                date: '04.03.2019',
                content: [
                    {
                        text: `
          <p>Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).</p>
          <p>Прошла обучение в школе Кундалини Йоги АМРИТ НАМ САРОВАР и стала сертифицированным преподавателем Кундалини йоги Уровень I (KRI). Обучалась у Карта Сингха (Франция), Биби Нанаки Каур (Германия), Джоды Каур (Германия), Кальян Сингха (Александр Куликов, Россия), Амрит Садханы Каур (Татьяна Терентьева, Россия), Меэра Сингха (Алексей Меркулов, Россия), Прабу Джап Сингха (Алексей Владовский, Россия).</p>
          <p>В 2013 году прошла курс випасаны в традиции <a class="article__link" href="#">Саяджи У Ба Кхина</a> (С.Н.Гоенка) в Латвии.<br> В 2018 году закончила обучение на курсе подготовки учителей по Шакти Данс.</p>
          <p>Для Вероники йога - это способ жить счастливой и наполненной жизнью, в соответствии со своим внутренним миром и в состоянии полной гармонии. </p>
          `,
                        imageUrl: './assets/images/article_image_1.jpg',
                    },
                    {
                        text: `
          <p>Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).</p>
          <p>Прошла обучение в школе Кундалини Йоги АМРИТ НАМ САРОВАР и стала сертифицированным преподавателем Кундалини йоги Уровень I (KRI). Обучалась у Карта Сингха (Франция), Биби Нанаки Каур (Германия), Джоды Каур (Германия), Кальян Сингха (Александр Куликов, Россия), Амрит Садханы Каур (Татьяна Терентьева, Россия), Меэра Сингха (Алексей Меркулов, Россия), Прабу Джап Сингха (Алексей Владовский, Россия).</p>
          <p>В 2013 году прошла курс випасаны в традиции Саяджи У Ба Кхина (С.Н.Гоенка) в Латвии.<br> В 2018 году закончила обучение на курсе подготовки учителей по Шакти Данс.</p>
          <p>Для Вероники йога - это способ жить счастливой и наполненной жизнью, в соответствии со своим внутренним миром и в состоянии полной гармонии. </p>
          `,
                    }
                ]
            },
            {
                id: 3,
                imageUrl: './assets/images/photo_3_580w.jpg',
                title: 'Почему кундалини Йога работает всегда. Часть 2',
                date: '04.03.2019',
                content: [
                    {
                        text: `
          <p>Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).</p>
          <p>Прошла обучение в школе Кундалини Йоги АМРИТ НАМ САРОВАР и стала сертифицированным преподавателем Кундалини йоги Уровень I (KRI). Обучалась у Карта Сингха (Франция), Биби Нанаки Каур (Германия), Джоды Каур (Германия), Кальян Сингха (Александр Куликов, Россия), Амрит Садханы Каур (Татьяна Терентьева, Россия), Меэра Сингха (Алексей Меркулов, Россия), Прабу Джап Сингха (Алексей Владовский, Россия).</p>
          <p>В 2013 году прошла курс випасаны в традиции <a class="article__link" href="#">Саяджи У Ба Кхина</a> (С.Н.Гоенка) в Латвии.<br> В 2018 году закончила обучение на курсе подготовки учителей по Шакти Данс.</p>
          <p>Для Вероники йога - это способ жить счастливой и наполненной жизнью, в соответствии со своим внутренним миром и в состоянии полной гармонии. </p>
          `,
                        imageUrl: './assets/images/article_image_1.jpg',
                    },
                    {
                        text: `
          <p>Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).</p>
          <p>Прошла обучение в школе Кундалини Йоги АМРИТ НАМ САРОВАР и стала сертифицированным преподавателем Кундалини йоги Уровень I (KRI). Обучалась у Карта Сингха (Франция), Биби Нанаки Каур (Германия), Джоды Каур (Германия), Кальян Сингха (Александр Куликов, Россия), Амрит Садханы Каур (Татьяна Терентьева, Россия), Меэра Сингха (Алексей Меркулов, Россия), Прабу Джап Сингха (Алексей Владовский, Россия).</p>
          <p>В 2013 году прошла курс випасаны в традиции Саяджи У Ба Кхина (С.Н.Гоенка) в Латвии.<br> В 2018 году закончила обучение на курсе подготовки учителей по Шакти Данс.</p>
          `,
                    }
                ]
            },
            {
                id: 4,
                imageUrl: './assets/images/blog.jpg',
                title: 'Как с помощью дыхания избавиться от недыхания',
                date: '04.03.2019',
                content: [
                    {
                        text: `
          <p>Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).</p>
          <p>Прошла обучение в школе Кундалини Йоги АМРИТ НАМ САРОВАР и стала сертифицированным преподавателем Кундалини йоги Уровень I (KRI). Обучалась у Карта Сингха (Франция), Биби Нанаки Каур (Германия), Джоды Каур (Германия), Кальян Сингха (Александр Куликов, Россия), Амрит Садханы Каур (Татьяна Терентьева, Россия), Меэра Сингха (Алексей Меркулов, Россия), Прабу Джап Сингха (Алексей Владовский, Россия).</p>
          <p>В 2013 году прошла курс випасаны в традиции <a class="article__link" href="#">Саяджи У Ба Кхина</a> (С.Н.Гоенка) в Латвии.<br> В 2018 году закончила обучение на курсе подготовки учителей по Шакти Данс.</p>
          <p>Для Вероники йога - это способ жить счастливой и наполненной жизнью, в соответствии со своим внутренним миром и в состоянии полной гармонии. </p>
          `,
                        imageUrl: './assets/images/article_image_1.jpg',
                    },
                    {
                        text: `
          <p>Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).</p>
          <p>Прошла обучение в школе Кундалини Йоги АМРИТ НАМ САРОВАР и стала сертифицированным преподавателем Кундалини йоги Уровень I (KRI). Обучалась у Карта Сингха (Франция), Биби Нанаки Каур (Германия), Джоды Каур (Германия), Кальян Сингха (Александр Куликов, Россия), Амрит Садханы Каур (Татьяна Терентьева, Россия), Меэра Сингха (Алексей Меркулов, Россия), Прабу Джап Сингха (Алексей Владовский, Россия).</p>
          <p>В 2013 году прошла курс випасаны в традиции Саяджи У Ба Кхина (С.Н.Гоенка) в Латвии.<br> В 2018 году закончила обучение на курсе подготовки учителей по Шакти Данс.</p>
          <p>Для Вероники йога - это способ жить счастливой и наполненной жизнью, в соответствии со своим внутренним миром и в состоянии полной гармонии. </p>
          `,
                    }
                ]
            },
            {
                id: 5,
                imageUrl: './assets/images/photo_1.png',
                title: 'Гнев',
                date: '04.03.2019',
                content: [
                    {
                        text: `
          <p>Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).</p>
          <p>Прошла обучение в школе Кундалини Йоги АМРИТ НАМ САРОВАР и стала сертифицированным преподавателем Кундалини йоги Уровень I (KRI). Обучалась у Карта Сингха (Франция), Биби Нанаки Каур (Германия), Джоды Каур (Германия), Кальян Сингха (Александр Куликов, Россия), Амрит Садханы Каур (Татьяна Терентьева, Россия), Меэра Сингха (Алексей Меркулов, Россия), Прабу Джап Сингха (Алексей Владовский, Россия).</p>
          <p>В 2013 году прошла курс випасаны в традиции <a class="article__link" href="#">Саяджи У Ба Кхина</a> (С.Н.Гоенка) в Латвии.<br> В 2018 году закончила обучение на курсе подготовки учителей по Шакти Данс.</p>
          <p>Для Вероники йога - это способ жить счастливой и наполненной жизнью, в соответствии со своим внутренним миром и в состоянии полной гармонии. </p>
          `,
                        imageUrl: './assets/images/article_image_1.jpg',
                    },
                    {
                        text: `
          <p>Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).</p>
          <p>Прошла обучение в школе Кундалини Йоги АМРИТ НАМ САРОВАР и стала сертифицированным преподавателем Кундалини йоги Уровень I (KRI). Обучалась у Карта Сингха (Франция), Биби Нанаки Каур (Германия), Джоды Каур (Германия), Кальян Сингха (Александр Куликов, Россия), Амрит Садханы Каур (Татьяна Терентьева, Россия), Меэра Сингха (Алексей Меркулов, Россия), Прабу Джап Сингха (Алексей Владовский, Россия).</p>
          <p>В 2013 году прошла курс випасаны в традиции Саяджи У Ба Кхина (С.Н.Гоенка) в Латвии.<br> В 2018 году закончила обучение на курсе подготовки учителей по Шакти Данс.</p>
          <p>Для Вероники йога - это способ жить счастливой и наполненной жизнью, в соответствии со своим внутренним миром и в состоянии полной гармонии. </p>
          `,
                    }
                ]
            },
            {
                id: 6,
                imageUrl: './assets/images/photo_1.png',
                title: 'Последняя статья',
                date: '05.03.2019',
                content: [
                    {
                        text: `
          <p>Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).</p>
          <p>Прошла обучение в школе Кундалини Йоги АМРИТ НАМ САРОВАР и стала сертифицированным преподавателем Кундалини йоги Уровень I (KRI). Обучалась у Карта Сингха (Франция), Биби Нанаки Каур (Германия), Джоды Каур (Германия), Кальян Сингха (Александр Куликов, Россия), Амрит Садханы Каур (Татьяна Терентьева, Россия), Меэра Сингха (Алексей Меркулов, Россия), Прабу Джап Сингха (Алексей Владовский, Россия).</p>
          <p>В 2013 году прошла курс випасаны в традиции <a class="article__link" href="#">Саяджи У Ба Кхина</a> (С.Н.Гоенка) в Латвии.<br> В 2018 году закончила обучение на курсе подготовки учителей по Шакти Данс.</p>
          <p>Для Вероники йога - это способ жить счастливой и наполненной жизнью, в соответствии со своим внутренним миром и в состоянии полной гармонии. </p>
          `,
                        imageUrl: './assets/images/article_image_1.jpg',
                    },
                    {
                        text: `
          <p>Начала заниматься йогой с 2010 года у Дарьи Прудниковой (Кундалини, Хатха, Аштанга).</p>
          <p>Прошла обучение в школе Кундалини Йоги АМРИТ НАМ САРОВАР и стала сертифицированным преподавателем Кундалини йоги Уровень I (KRI). Обучалась у Карта Сингха (Франция), Биби Нанаки Каур (Германия), Джоды Каур (Германия), Кальян Сингха (Александр Куликов, Россия), Амрит Садханы Каур (Татьяна Терентьева, Россия), Меэра Сингха (Алексей Меркулов, Россия), Прабу Джап Сингха (Алексей Владовский, Россия).</p>
          <p>В 2013 году прошла курс випасаны в традиции Саяджи У Ба Кхина (С.Н.Гоенка) в Латвии.<br> В 2018 году закончила обучение на курсе подготовки учителей по Шакти Данс.</p>
          <p>Для Вероники йога - это способ жить счастливой и наполненной жизнью, в соответствии со своим внутренним миром и в состоянии полной гармонии. </p>
          `,
                    }
                ]
            },
        ];
    }
    getArticles(page) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
            data: this.articles.filter(article => {
                return article.id >= page * this.limit && article.id < page * this.limit + this.limit;
            }),
            limit: this.limit,
            count: this.articles.length
        });
    }
    getArticle(id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
            data: this.articles[id],
            limit: this.limit,
            count: this.articles.length
        });
    }
    getNextArticleId(id) {
        return id < this.articles.length - 1 ? ++id : id;
    }
    getPrevArticleId(id) {
        return id > 0 ? --id : id;
    }
}
ArticleService.ɵfac = function ArticleService_Factory(t) { return new (t || ArticleService)(); };
ArticleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArticleService, factory: ArticleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ry1Y":
/*!*****************************************************!*\
  !*** ./src/app/pages/home-page/home-page.module.ts ***!
  \*****************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page.component */ "JFIp");
/* harmony import */ var _home_page_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page-routing.module */ "khes");
/* harmony import */ var src_app_components_cover_cover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/cover/cover.component */ "JOVU");
/* harmony import */ var src_app_components_section_section_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/section/section.module */ "7tuN");
/* harmony import */ var src_app_components_causes_causes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/causes/causes.component */ "iOYQ");
/* harmony import */ var src_app_components_video_video_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/video/video.module */ "KhKd");
/* harmony import */ var src_app_components_purchase_purchase_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/purchase/purchase.module */ "m6Gv");










class HomePageModule {
}
HomePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomePageModule });
HomePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomePageModule_Factory(t) { return new (t || HomePageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomePageRoutingModule"],
            src_app_components_purchase_purchase_module__WEBPACK_IMPORTED_MODULE_8__["PurchaseModule"],
            src_app_components_section_section_module__WEBPACK_IMPORTED_MODULE_5__["SectionModule"],
            src_app_components_video_video_module__WEBPACK_IMPORTED_MODULE_7__["VideoModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomePageModule, { declarations: [_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"],
        src_app_components_cover_cover_component__WEBPACK_IMPORTED_MODULE_4__["CoverComponent"],
        src_app_components_causes_causes_component__WEBPACK_IMPORTED_MODULE_6__["CausesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomePageRoutingModule"],
        src_app_components_purchase_purchase_module__WEBPACK_IMPORTED_MODULE_8__["PurchaseModule"],
        src_app_components_section_section_module__WEBPACK_IMPORTED_MODULE_5__["SectionModule"],
        src_app_components_video_video_module__WEBPACK_IMPORTED_MODULE_7__["VideoModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"],
                    src_app_components_cover_cover_component__WEBPACK_IMPORTED_MODULE_4__["CoverComponent"],
                    src_app_components_causes_causes_component__WEBPACK_IMPORTED_MODULE_6__["CausesComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _home_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomePageRoutingModule"],
                    src_app_components_purchase_purchase_module__WEBPACK_IMPORTED_MODULE_8__["PurchaseModule"],
                    src_app_components_section_section_module__WEBPACK_IMPORTED_MODULE_5__["SectionModule"],
                    src_app_components_video_video_module__WEBPACK_IMPORTED_MODULE_7__["VideoModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "t99X":
/*!***************************************************************!*\
  !*** ./src/app/components/breadcrumb/breadcrumb.component.ts ***!
  \***************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function BreadcrumbComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadcrumb_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", breadcrumb_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumb_r1.label);
} }
class BreadcrumbComponent {
    constructor(activeRoute, router) {
        this.activeRoute = activeRoute;
        this.router = router;
    }
    ngOnInit() {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]))
            .subscribe(() => {
            this.breadcrumbs = this.buildBreadcrumbs(this.activeRoute.root).slice(0, length - 1);
        });
    }
    buildBreadcrumbs(route, url = '/', breadcrumbs = []) {
        const children = route.children;
        if (children.length === 0) {
            return breadcrumbs;
        }
        for (const child of children) {
            const routeURL = child.snapshot.url.map(segment => segment.path).join('/');
            const label = child.snapshot.data.breadcrumb;
            if (routeURL !== '') {
                url += `/${routeURL}`;
            }
            if (label !== null || label !== undefined) {
                breadcrumbs.push({ label, url });
            }
            return this.buildBreadcrumbs(child, url, breadcrumbs);
        }
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], decls: 2, vars: 1, consts: [[1, "breadcrumb"], ["class", "breadcrumb__item", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "breadcrumb__item", 3, "routerLink"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_a_1_Template, 2, 2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breadcrumbs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-breadcrumb',
                templateUrl: './breadcrumb.component.html',
                styleUrls: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "vK3j":
/*!****************************************************!*\
  !*** ./src/app/components/social/social.module.ts ***!
  \****************************************************/
/*! exports provided: SocialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialModule", function() { return SocialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _social_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social.component */ "nJq9");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");







class SocialModule {
    constructor(library) {
        this.library = library;
        library.addIcons(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFacebookF"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faYoutube"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faInstagram"]);
    }
}
SocialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SocialModule });
SocialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SocialModule_Factory(t) { return new (t || SocialModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconLibrary"])); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SocialModule, { declarations: [_social_component__WEBPACK_IMPORTED_MODULE_2__["SocialComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]], exports: [_social_component__WEBPACK_IMPORTED_MODULE_2__["SocialComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_social_component__WEBPACK_IMPORTED_MODULE_2__["SocialComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]
                ],
                exports: [_social_component__WEBPACK_IMPORTED_MODULE_2__["SocialComponent"]]
            }]
    }], function () { return [{ type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconLibrary"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: 'home',
        data: {
            breadcrumb: 'О курсе'
        },
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/home-page/home-page.module */ "ry1Y"))
            .then(m => m.HomePageModule)
    },
    {
        path: 'videos',
        data: {
            breadcrumb: 'Видео'
        },
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/video-page/video-page.module */ "/SmA"))
            .then(m => m.VideoPageModule)
    },
    {
        path: 'library',
        data: {
            breadcrumb: 'Библиотека'
        },
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/library-page/library-page.module */ "U4j7"))
            .then(m => m.LibraryPageModule)
    },
    {
        path: 'article-list',
        data: {
            breadcrumb: 'Блог'
        },
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/blog-page/blog-page.module */ "wwRA"))
            .then(m => m.BlogPageModule)
    }
];
class RoutingModule {
}
RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RoutingModule });
RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RoutingModule_Factory(t) { return new (t || RoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "wRQo":
/*!***********************************************************!*\
  !*** ./src/app/components/purchase/purchase.component.ts ***!
  \***********************************************************/
/*! exports provided: PurchaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseComponent", function() { return PurchaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../email/email.component */ "0fkH");



class PurchaseComponent {
    constructor() { }
    ngOnInit() {
    }
}
PurchaseComponent.ɵfac = function PurchaseComponent_Factory(t) { return new (t || PurchaseComponent)(); };
PurchaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseComponent, selectors: [["app-purchase"]], decls: 8, vars: 0, consts: [[1, "purchase"], [1, "purchase__title"], [1, "purchase__title", "purchase__title_blue"], ["href", "#", 1, "button", "button_blue", "purchase__button"]], template: function PurchaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0426\u0435\u043D\u0430 \u043A\u0443\u0440\u0441\u0430: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "200 \u0431\u0435\u043B.\u0440\u0443\u0431.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041A\u0443\u043F\u0438\u0442\u044C \u043A\u0443\u0440\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_email_email_component__WEBPACK_IMPORTED_MODULE_1__["EmailComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase',
                templateUrl: './purchase.component.html',
                styleUrls: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "wwRA":
/*!*****************************************************!*\
  !*** ./src/app/pages/blog-page/blog-page.module.ts ***!
  \*****************************************************/
/*! exports provided: BlogPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPageModule", function() { return BlogPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _blog_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-page-routing.module */ "Sbb6");
/* harmony import */ var _blog_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog-page.component */ "X7Zm");
/* harmony import */ var src_app_components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/pagination/pagination.module */ "O43q");
/* harmony import */ var src_app_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/sidebar/sidebar.module */ "zWxg");
/* harmony import */ var src_app_components_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/article-list/article-list.component */ "erOe");








class BlogPageModule {
}
BlogPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BlogPageModule });
BlogPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BlogPageModule_Factory(t) { return new (t || BlogPageModule)(); }, imports: [[
            _blog_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlogPageRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_5__["SidebarModule"],
            src_app_components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogPageModule, { declarations: [_blog_page_component__WEBPACK_IMPORTED_MODULE_3__["BlogPageComponent"],
        src_app_components_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_6__["ArticleListComponent"]], imports: [_blog_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlogPageRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_5__["SidebarModule"],
        src_app_components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"]], exports: [_blog_page_component__WEBPACK_IMPORTED_MODULE_3__["BlogPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _blog_page_component__WEBPACK_IMPORTED_MODULE_3__["BlogPageComponent"],
                    src_app_components_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_6__["ArticleListComponent"]
                ],
                imports: [
                    _blog_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlogPageRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_5__["SidebarModule"],
                    src_app_components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"]
                ],
                exports: [
                    _blog_page_component__WEBPACK_IMPORTED_MODULE_3__["BlogPageComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "xkzH":
/*!***************************************************!*\
  !*** ./src/app/services/causes/causes.service.ts ***!
  \***************************************************/
/*! exports provided: CausesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CausesService", function() { return CausesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class CausesService {
    constructor() {
        this.causes = [
            {
                id: 1,
                title: 'Жить в Осознанности, быть здесь и сейчас',
                text: 'Нет вчера, нет завтра, только то, что происходит с тобой сейчас - действительно ценно и имеет значение. Проживай этот момент, пропускай его через себя и осознавай каждой клеточкой'
            },
            {
                id: 2,
                title: 'Успокоить свой Ум',
                text: 'Неспокойный ум порождает бесконтрольные мысли и эмоции, которые в свою очередь приводят к токсичным действиям. Спокойный ум ведет к внутренней гармонии и состоянию счастья не по причине, а вопреки'
            },
            {
                id: 3,
                title: 'Наполниться внутренней энергией',
                text: 'Раскрыть свой внутренний источник энергии и сил. Не нужен никакой внешней подпитки, нужно просто знать способы и техники, как пробудить то, что в нас заложено природой'
            },
            {
                id: 4,
                title: 'Избавиться от вредных привычек',
                text: 'Кундалини йога - мощнейший инструмент, который при постоянной практике полностью искореняет вредные привычки и закрывает дорогу к ним навсегда'
            },
            {
                id: 5,
                title: 'Решить то, что мешает быть счастливым',
                text: 'Проблемы в взаимоотношениях, отсутствие любви к себе, нет процветания, страхи, внутренний гнев, привычные и не работающие паттерны поведения ума, гормональный дисбаланс все эти и многие'
            },
            {
                id: 6,
                title: 'Сохранить здоровье и молодость',
                text: 'Существует множество техник, которые позволят вам значительно улучшить ваше здоровье, сохранить молодость и будут являться мощной профилактикой и защитой перед любыми заболеваниями'
            }
        ];
    }
    getCauses() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.causes);
    }
}
CausesService.ɵfac = function CausesService_Factory(t) { return new (t || CausesService)(); };
CausesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CausesService, factory: CausesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CausesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 21, vars: 0, consts: [[1, "sidebar"], [1, "sidebar", "sidebar_short"], ["href", "list_mobile.html", 1, "sidebar__title", "sidebar__title_short"], [1, "sidebar__item"], [1, "sidebar", "sidebar_long"], ["href", "#", 1, "sidebar__title"], ["href", "#", 1, "sidebar__item"], ["routerLink", "/article", 1, "sidebar__item"], ["routerLink", "/videos", 1, "sidebar__item"], ["routerLink", "/library", 1, "sidebar__item"], ["routerLink", "/article-list", 1, "sidebar__item"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0422\u0435\u043C\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0412\u0441\u0435 \u0441\u0442\u0430\u0442\u044C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0422\u0435\u043C\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0412\u0441\u0435 \u0441\u0442\u0430\u0442\u044C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0421\u0435\u043C\u044C\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0412\u0438\u0434\u0435\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0411\u043B\u043E\u0433");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: []
            }]
    }], function () { return []; }, null); })();


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
    .catch(err => console.error(err));


/***/ }),

/***/ "zWxg":
/*!******************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.module.ts ***!
  \******************************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.component */ "zBoC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class SidebarModule {
}
SidebarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SidebarModule });
SidebarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SidebarModule_Factory(t) { return new (t || SidebarModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SidebarModule, { declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                ],
                exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map