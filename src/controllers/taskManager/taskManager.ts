import FileManager from "../../lib/fileManager/fileManager";
import { Task } from "./task.interface";

export default class TaskManager {
  private fm: FileManager;
  private tasksPath: string;

  constructor() {
    this.fm = new FileManager();
    this.tasksPath = this.fm.getConfig().paths.tasksPath;
  }

  public getTasks(): Task[] {
    return this.fm.getJSONFile(this.tasksPath);
  }

  public saveTask(data: Task): void {
    let tasks = this.getTasks();
    tasks.push(data);
    this.fm.saveFile(this.tasksPath, JSON.stringify(tasks));
  }

  public deleteLastTask(): void {
    let tasks = this.getTasks();
    tasks.pop();
    this.fm.saveFile(this.tasksPath, JSON.stringify(tasks)); 
  }


}

