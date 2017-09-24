export interface InitFile {
  path: string,
  data: any
};

export interface AppPaths{
  directoryPath: string,
  tasksPath: string,
  configPath: string,
  lastTask: string,
};

export interface fileManagerConfig {
  paths: AppPaths,
  initialFiles: InitFile[]
};
