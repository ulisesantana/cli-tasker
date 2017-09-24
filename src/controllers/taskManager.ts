import FileManager from "../lib/fileManager";

interface Task {
  task: string,
  deadline: string
}

export default class TaskManager {
  private fm: FileManager;
  private tasksPath: string;

  constructor(fm: FileManager, tasksPath: string) {
    this.fm = fm;
    this.tasksPath = tasksPath;
  }

  public getTasks(): Task[] {
    return this.fm.getJSONFile(this.tasksPath);
  }

  public saveTask(data: Task): void {
    let tasks = this.getTasks();
    tasks.push(data);
    this.fm.saveFile(this.tasksPath, JSON.stringify(tasks));
  }


}

