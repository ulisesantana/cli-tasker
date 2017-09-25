import FileManager from "../../lib/fileManager/fileManager";
import { Task } from "../../interfaces/task.interface";

export default class TaskGetter {
  public fm: FileManager;
  public tasksPath: string;

  constructor() {
    this.fm = new FileManager();
    this.tasksPath = this.fm.getConfig().paths.tasksPath;
  }

  public getTasks(): Task[] {
    return this.fm.getJSONFile(this.tasksPath);
  }

}

