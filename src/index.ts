#!/usr/bin/env node
import TaskManager from './controllers/taskManager/taskManager';
import TaskFilter from './controllers/taskFilter/taskFilter';
import * as prog from "caporal";

const version = require("../package.json").version;
const initTime = (new Date()).getTime();
const tm = new TaskManager();
const tf = new TaskFilter();

prog
  .version(version)
  .command('delete last', 'Delete last task')
  .action(function (args, options, logger) {
    if (tm.getTasks().length > 0) {
      tm.deleteLastTask();
      logger.info("Last task deleted");
    } else {
      logger.error("No tasks to delete.")
    }
  })

  .command('ls', 'List all tasks')
  .argument('[kind]', 'What do you want to list', ["tasks", "projects"])
  .option('-p <project>', 'Filter by project', tf.getProjects())
  .action(function (args, options, logger) {
    switch (args.kind) {
      case 'projects':
      logger.info(tf.getProjects());
      break;
      case 'tasks':
        if (options.project) {
          logger.info(tf.getTasksByProject(options.project));
        } else {
          logger.info(tf.getTasksByDate());
        }
        break;
      default:
        logger.info(tf.getTasksByDate());
        break;
    }
    logger.info(`Options: ${JSON.stringify(args)}`);
  })

  .command('create', 'Create a task')
  .action(function (args, options, logger) {
    let newTask = {
      id: ((new Date()).getTime() * Math.floor(Math.random() * 100)).toString(),
      name: "Testing things",
      date: (new Date()).toISOString(),
      project: 'Things',
      ticket: '[THINGS-82] Full Testing',
      tags: ['test', 'things'],
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