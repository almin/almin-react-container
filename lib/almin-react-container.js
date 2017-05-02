"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// MIT © 2017 azu
var React = require("react");
var shallow_equal_object_1 = require("shallow-equal-object");
var AlminReactContainer = (function () {
    function AlminReactContainer() {
    }
    AlminReactContainer.create = function (WrappedComponent, context) {
        var componentName = WrappedComponent.displayName || WrappedComponent.name;
        return _a = (function (_super) {
                __extends(AlminContainer, _super);
                function AlminContainer() {
                    var _this = _super.call(this) || this;
                    _this.state = context.getState();
                    return _this;
                }
                AlminContainer.prototype.shouldComponentUpdate = function (_nextProps, nextState) {
                    // Almin StoreGroup use Object.assign merging by default
                    // It means that theses states are not strict equal always.
                    return !shallow_equal_object_1.shallowEqual(this.state, nextState);
                };
                AlminContainer.prototype.componentWillMount = function () {
                    var _this = this;
                    var onChangeHandler = function () {
                        _this.setState(context.getState());
                    };
                    this.unSubscribe = context.onChange(onChangeHandler);
                };
                AlminContainer.prototype.componentWillUnmount = function () {
                    if (typeof this.unSubscribe === "function") {
                        this.unSubscribe();
                    }
                };
                AlminContainer.prototype.render = function () {
                    // Workaround TS2.3.1: https://github.com/Microsoft/TypeScript/pull/13288
                    return React.createElement(WrappedComponent, __assign({}, this.state));
                };
                return AlminContainer;
            }(React.Component)),
            _a.displayName = "AlminContainer(" + componentName + ")",
            _a;
        var _a;
    };
    return AlminReactContainer;
}());
exports.default = AlminReactContainer;
//# sourceMappingURL=almin-react-container.js.map