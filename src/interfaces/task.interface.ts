export interface Task {
  id: string,
  name: string,
  date: string,
  project: string,
  ticket: string,
  tags: string[],
  tracks: Track[],
  done: boolean,
  iceboxed: boolean
}

export interface Track {
  start: string,
  stop?: string,
  duration?: number
}
