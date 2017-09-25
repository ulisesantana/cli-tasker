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
exports.__esModule = true;
var taskManager_1 = require("../taskManager/taskManager");
var TaskFilter = /** @class */ (function (_super) {
    __extends(TaskFilter, _super);
    function TaskFilter() {
        return _super.call(this) || this;
    }
    return TaskFilter;
}(taskManager_1["default"]));
exports["default"] = TaskFilter;
