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
var taskGetter_1 = require("../taskGetter/taskGetter");
var TaskFilter = /** @class */ (function (_super) {
    __extends(TaskFilter, _super);
    function TaskFilter() {
        return _super.call(this) || this;
    }
    TaskFilter.prototype.getTasksByDate = function (desc) {
        var _this = this;
        if (desc === void 0) { desc = true; }
        var tasks = this.getTasks();
        if (desc) {
            tasks = tasks.sort(function (a, b) {
                return _this.getTime(b.date) - _this.getTime(a.date);
            });
        }
        else {
            tasks = tasks.sort(function (a, b) {
                return _this.getTime(a.date) - _this.getTime(b.date);
            });
        }
        return tasks;
    };
    TaskFilter.prototype.getProjects = function () {
        var tasks = this.getTasks();
        var projects = [];
        tasks.forEach(function (task) {
            if (projects.indexOf(task.project) === -1) {
                projects.push(task.project);
            }
        });
        return projects;
    };
    TaskFilter.prototype.getTasksByProject = function (project) {
        var tasks = this.getTasks();
        tasks = tasks.filter(function (task) {
            return task.project = project;
        });
        return tasks;
    };
    TaskFilter.prototype.getTime = function (date) {
        return (new Date(date).getTime());
    };
    return TaskFilter;
}(taskGetter_1["default"]));
exports["default"] = TaskFilter;
