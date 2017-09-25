"use strict";
exports.__esModule = true;
var fileManager_1 = require("../../lib/fileManager/fileManager");
var TaskGetter = /** @class */ (function () {
    function TaskGetter() {
        this.fm = new fileManager_1["default"]();
        this.tasksPath = this.fm.getConfig().paths.tasksPath;
    }
    TaskGetter.prototype.getTasks = function () {
        return this.fm.getJSONFile(this.tasksPath);
    };
    return TaskGetter;
}());
exports["default"] = TaskGetter;
