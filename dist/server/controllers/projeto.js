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
var projeto_1 = require("../models/projeto");
var base_1 = require("./base");
var CProjetoCtrlCtrl = /** @class */ (function (_super) {
    __extends(CProjetoCtrlCtrl, _super);
    function CProjetoCtrlCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = projeto_1.default;
        return _this;
    }
    return CProjetoCtrlCtrl;
}(base_1.default));
exports.default = CProjetoCtrlCtrl;
//# sourceMappingURL=projeto.js.map