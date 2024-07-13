import { Task, TaskID } from "../types";
import { create } from "zustand";

interface StateProcessTasks {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (idTask: TaskID) => void;
}

export const useProcessTasksStore = create<StateProcessTasks>((set) => ({
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
