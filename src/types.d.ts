export type TaskID = `${string}-${string}-${string}-${string}-${string}`;

export interface Task {
  taskId: TaskID;
  taskTitle: string;
  taskAuthor: string;
  taskDescription: string;
}
