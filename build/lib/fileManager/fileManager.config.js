"use strict";
exports.__esModule = true;
var directoryPath = process.env.DIR_PATH || '.tasker';
var tasksPath = process.env.TASKS_FILE || 'tasks.json';
var configPath = process.env.CONFIG_FILE || 'config.json';
var lastTask = process.env.LAST_TASK_FILE || 'lastTask.json';
exports["default"] = {
    paths: {
        directoryPath: directoryPath,
        tasksPath: tasksPath,
        configPath: configPath,
        lastTask: lastTask
    },
    initialFiles: [
        { path: tasksPath, data: [] },
        { path: lastTask, data: [] },
        { path: configPath, data: {} }
    ]
};
