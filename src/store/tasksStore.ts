import { create } from "zustand";
import { Task, TaskID } from "../types";

interface StateTasks {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (idTask: TaskID) => void;
}

export const useTasksStore = create<StateTasks>((set) => ({
  tasks: [],
  addTask: (task: Task) =>
    set((state) => ({
      tasks: [task, ...state.tasks],
    })),
  removeTask: (idTask: TaskID) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.taskId !== idTask),
    })),
}));
