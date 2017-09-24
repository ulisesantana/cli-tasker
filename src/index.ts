#!/usr/bin/env node
import TaskManager from './controllers/taskManager/taskManager';
import * as prog from "caporal";

const version = require("../package.json").version;
const initTime = (new Date()).getTime();
const tm = new TaskManager();

prog
  .version(version)
  .command('delete last', 'Delete last task')
  .action(function (args, options, logger) {
    if (tm.getTasks().length > 0){
      tm.deleteLastTask();
      logger.info("Last task deleted");
    } else {
      logger.error("No tasks to delete.")
    } 
  })

  .command('create', 'Create a task')
  .action(function (args, options, logger) {
    let newTask = {
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

console.log(`Total tasks: ${tm.getTasks().length}`);
console.log(`Total time: ${(new Date().getTime()) - initTime} ms`);