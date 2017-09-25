import TaskGetter from "../taskGetter/taskGetter";
import { Task } from "../../interfaces/task.interface";

export default class TaskFilter extends TaskGetter {

  constructor() {
    super();
  }

  public getTasksByDate(desc: boolean = true) {
    let tasks = this.getTasks();

    if (desc) {
      tasks = tasks.sort((a, b) => {
        return this.getTime(b.date) - this.getTime(a.date)
      });
    } else {
      tasks = tasks.sort((a, b) => {
        return this.getTime(a.date) - this.getTime(b.date)
      });
    }

    return tasks;
  }

  public getProjects(): string[] {
    let tasks = this.getTasks();
    let projects: string[] = [];

    tasks.forEach((task) => {
      if (projects.indexOf(task.project) === -1) {
        projects.push(task.project);
      }
    });

    return projects;
  }

  public getTasksByProject(project: string): Task[] {
    let tasks = this.getTasks();

    tasks = tasks.filter((task) => {
      return task.project = project;
    });

    return tasks;
  }

  private getTime(date: string): number {
    return (new Date(date).getTime());
  }
}