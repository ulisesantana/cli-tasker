import * as fs from "fs";
import * as os from "os";

interface InitFile {
  path: string,
  data: any
};

export default class FileManager {
  private directoryPath: string;
  private tasksPath: string;
  private configPath: string;

  constructor(directoryPath: string, files: InitFile[]) {
    this.directoryPath = `${os.homedir()}/${directoryPath}`;

    if (!fs.existsSync(this.directoryPath)) {
      fs.mkdirSync(this.directoryPath);

      if (files) {
        files.forEach((file) => {
          fs.writeFileSync(this.getPath(file.path), JSON.stringify(file.data));
        });
      }
    }
  }

  public getFile(filePath: string): string {
    try {
      return fs.readFileSync(this.getPath(filePath)).toString();
    } catch (err) {
      throw err
    }
  }

  public getJSONFile(filePath: string): any {
    try {
      return JSON.parse(fs.readFileSync(this.getPath(filePath)).toString());
    } catch (err) {
      throw err
    }
  }

  public saveFile(filePath: string, data: string): void {
    try {
      fs.writeFileSync(this.getPath(filePath), data);
    } catch (err) {
      throw err;
    }
  }

  private getPath(filePath: string): string {
    return `${this.directoryPath}/${filePath}`;
  }


}