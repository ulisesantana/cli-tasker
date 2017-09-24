const directoryPath = process.env.DIR_PATH || '.tasker';
const tasksPath = process.env.TASKS_FILE || 'tasks.json';
const configPath = process.env.CONFIG_FILE || 'config.json';
const lastTask = process.env.LAST_TASK_FILE || 'lastTask.json';

export default {
  paths: {
    directoryPath,
    tasksPath,
    configPath,
    lastTask,
  },
  initialFiles: [
    { path: tasksPath, data: [] },
    { path: lastTask, data: [] },
    { path: configPath, data: {} }
  ]
}