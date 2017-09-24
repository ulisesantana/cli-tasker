#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var taskManager_1 = require("./controllers/taskManager/taskManager");
var prog = require("caporal");
var version = require("../package.json").version;
var initTime = (new Date()).getTime();
var tm = new taskManager_1["default"]();
prog
    .version(version)
    .command('delete last', 'Delete last task')
    .action(function (args, options, logger) {
    if (tm.getTasks().length > 0) {
        tm.deleteLastTask();
        logger.info("Last task deleted");
    }
    else {
        logger.error("No tasks to delete.");
    }
})
    .command('create', 'Create a task')
    .action(function (args, options, logger) {
    var newTask = {
        id: (new Date()).getTime().toString(),
        name: "Testing stuff",
        date: (new Date()).toISOString(),
        project: 'Stuff',
        ticket: '[STUFF-82] Full Testing',
        tags: ['test', 'stuff'],
        tracks: null,
        done: false,
        iceboxed: false
    };
    tm.saveTask(newTask);
    logger.info("Task saved");
});
prog.parse(process.argv);
console.log("Total tasks: " + tm.getTasks().length);
console.log("Total time: " + ((new Date().getTime()) - initTime) + " ms");
