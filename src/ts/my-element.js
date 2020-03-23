"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
/**
 * Import LitElement base class, html helper function,
 * and TypeScript decorators
 **/
var lit_element_1 = require("lit-element");
/**
 * Use the customElement decorator to define your class as
 * a custom element. Registers <my-element> as an HTML tag.
 */
var MyElement = /** @class */ (function (_super) {
    __extends(MyElement, _super);
    function MyElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Create an observed property. Triggers update on change.
         */
        _this.foo = 'foo';
        return _this;
    }
    /**
     * Implement `render` to define a template for your element.
     */
    MyElement.prototype.render = function () {
        /**
         * Use JavaScript expressions to include property values in
         * the element template.
         */
        return lit_element_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<p>", "</p>"], ["<p>", "</p>"])), this.foo);
    };
    __decorate([
        lit_element_1.property()
    ], MyElement.prototype, "foo");
    MyElement = __decorate([
        lit_element_1.customElement('my-element')
    ], MyElement);
    return MyElement;
}(lit_element_1.LitElement));
exports.MyElement = MyElement;
var templateObject_1;
