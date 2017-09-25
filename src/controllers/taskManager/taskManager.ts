// import FileManager from "../../lib/fileManager/fileManager";
import TaskGetter from "../taskGetter/taskGetter";
import { Task } from "../../interfaces/task.interface";

export default class TaskManager extends TaskGetter {

  constructor() {
    super();
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

