"use strict";
exports.__esModule = true;
var TaskManager = /** @class */ (function () {
    function TaskManager(fm, tasksPath) {
        this.fm = fm;
        this.tasksPath = tasksPath;
    }
    TaskManager.prototype.getTasks = function () {
        return this.fm.getJSONFile(this.tasksPath);
    };
    TaskManager.prototype.saveTask = function (data) {
        var tasks = this.getTasks();
        tasks.push(data);
        this.fm.saveFile(this.tasksPath, JSON.stringify(tasks));
    };
    return TaskManager;
}());
exports["default"] = TaskManager;
