import FileManager from './lib/fileManager';
import TaskManager from './controllers/taskManager';
import config from './config';

const fm = new FileManager(config.directoryPath, config.initialFiles);
const tm = new TaskManager(fm, config.tasksPath);

tm.saveTask({
  task: "Comprar melones",
  deadline: (new Date).toISOString()
});

console.log(tm.getTasks());
