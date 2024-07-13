import { Task } from "../types";
import { useTasksStore } from "../store/tasksStore";
import { useProcessTasksStore } from "../store/processTasksStore";

interface Props {
  task: Task;
}

export default function TaskRender({ task }: Props) {
  const { taskId, taskTitle, taskAuthor } = task;
  const removeTask = useTasksStore((state) => state.removeTask);
  const addProcessTask = useProcessTasksStore((state) => state.addTask);

  function handleDelete() {
    removeTask(task.taskId);
  }

  function handleAddProcessTask() {
    addProcessTask(task);
    removeTask(task.taskId);
  }

  return (
    <div className="task">
      <div className="information">
        <p>
          {taskTitle} <span>by {taskAuthor}</span>
        </p>
        <p className="id">{taskId}</p>
      </div>
      <div className="task-buttons">
        <button className="delete" onClick={() => handleDelete()}>
          Delete
        </button>
        <button className="in-process" onClick={() => handleAddProcessTask()}>
          In Process
        </button>
      </div>
    </div>
  );
}
