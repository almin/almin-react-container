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
Object.defineProperty(exports, "__esModule", { value: true });
// MIT © 2017 azu
// It is test file for d.ts
var almin_react_container_1 = require("../almin-react-container");
var React = require("react");
var almin_1 = require("almin");
// Store
var MyState = (function () {
    function MyState(_a) {
        var value = _a.value;
        this.value = value;
    }
    return MyState;
}());
var MyStore = (function (_super) {
    __extends(MyStore, _super);
    function MyStore() {
        var _this = _super.call(this) || this;
        _this.state = new MyState({
            value: "Hello World!"
        });
        return _this;
    }
    MyStore.prototype.getState = function () {
        return {
            myState: this.state
        };
    };
    return MyStore;
}(almin_1.Store));
// Context
var context = new almin_1.Context({
    dispatcher: new almin_1.Dispatcher(),
    store: new MyStore()
});
// View
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return React.createElement("div", null, this.props.myState.value);
    };
    return App;
}(React.Component));
// Create Container
var RootContainer = almin_react_container_1.default.create(App, context);
console.log(RootContainer);
//# sourceMappingURL=almin-react-container-test.js.map