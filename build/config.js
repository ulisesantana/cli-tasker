"use strict";
exports.__esModule = true;
var directoryPath = '.tasker';
var tasksPath = 'tasks.json';
var configPath = 'config.json';
var lastTask = 'lastTask.json';
exports["default"] = {
    directoryPath: directoryPath,
    tasksPath: tasksPath,
    configPath: configPath,
    lastTask: lastTask,
    initialFiles: [
        { path: tasksPath, data: [] },
        { path: lastTask, data: [] },
        { path: configPath, data: {} }
    ]
};
