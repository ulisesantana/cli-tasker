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
// import FileManager from "../../lib/fileManager/fileManager";
var taskGetter_1 = require("../taskGetter/taskGetter");
var TaskManager = /** @class */ (function (_super) {
    __extends(TaskManager, _super);
    function TaskManager() {
        return _super.call(this) || this;
    }
    TaskManager.prototype.saveTask = function (data) {
        var tasks = this.getTasks();
        tasks.push(data);
        this.fm.saveFile(this.tasksPath, JSON.stringify(tasks));
    };
    TaskManager.prototype.deleteLastTask = function () {
        var tasks = this.getTasks();
        tasks.pop();
        this.fm.saveFile(this.tasksPath, JSON.stringify(tasks));
    };
    return TaskManager;
}(taskGetter_1["default"]));
exports["default"] = TaskManager;
