"use strict";
exports.__esModule = true;
var fileManager_1 = require("../../lib/fileManager/fileManager");
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.fm = new fileManager_1["default"]();
        this.tasksPath = this.fm.getConfig().paths.tasksPath;
    }
    TaskManager.prototype.getTasks = function () {
        return this.fm.getJSONFile(this.tasksPath);
    };
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
}());
exports["default"] = TaskManager;
