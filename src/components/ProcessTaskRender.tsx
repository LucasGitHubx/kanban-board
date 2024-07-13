import { useProcessTasksStore } from "../store/processTasksStore";
import { useTasksStore } from "../store/tasksStore";
import { useDoneTasksStore } from "../store/doneTasksStore";
import { Task } from "../types";

interface Props {
  task: Task;
}

export default function ProcessTaskRender({ task }: Props) {
  const { taskId, taskTitle, taskAuthor } = task;
  const removeInProcessTask = useProcessTasksStore((state) => state.removeTask);
  const addTask = useTasksStore((state) => state.addTask);
  const addDoneTask = useDoneTasksStore((state) => state.addTask);

  function handleDelete() {
    removeInProcessTask(task.taskId);
    addTask(task);
  }

  function handleAddDoneTask() {
    removeInProcessTask(task.taskId);
    addDoneTask(task);
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
        <button className="done" onClick={() => handleAddDoneTask()}>
          Done
        </button>
      </div>
    </div>
  );
}
