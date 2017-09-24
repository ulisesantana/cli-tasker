import * as fs from "fs";
import * as os from "os";
import { InitFile, fileManagerConfig } from "./fileManager.interfaces";
import config from "./fileManager.config"

export default class FileManager {
  private directoryPath: string;

  constructor() {
    this.directoryPath = `${os.homedir()}/${config.paths.directoryPath}`;

    if (!fs.existsSync(this.directoryPath)) {
      fs.mkdirSync(this.directoryPath);

      if (config.initialFiles) {
        config.initialFiles.forEach((file) => {
          fs.writeFileSync(this.getPath(file.path), JSON.stringify(file.data));
        });
      }
    }

    if (config.initialFiles) {
      config.initialFiles.forEach((file) => {
        if (!fs.existsSync(this.getPath(file.path))) {
          fs.writeFileSync(this.getPath(file.path), JSON.stringify(file.data));
        }
      });
    }
  }

  public getConfig(): fileManagerConfig{
    return config;
  }

  public getFile(filePath: string): string {
    try {
      return fs.readFileSync(this.getPath(filePath)).toString();
    } catch (err) {
      console.log(err);
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

  public updateFile(filePath: string, data: string): void {
    try {
      fs.appendFileSync(this.getPath(filePath), data);
    } catch (err) {
      throw err;
    }
  }

  public deleteFile(filePath: string): void {
    try {
      fs.unlinkSync(this.getPath(filePath));
    } catch (err) {
      throw err;
    }
  }

  private getPath(filePath: string): string {
    return `${this.directoryPath}/${filePath}`;
  }


}