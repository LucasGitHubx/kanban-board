import { useTasksStore } from "../store/tasksStore";
import { useDoneTasksStore } from "../store/doneTasksStore";
import { Task } from "../types";

interface Props {
  task: Task;
}

/*
 ██▓     █    ██  ▄████▄   ▄▄▄        ██████ 
▓██▒     ██  ▓██▒▒██▀ ▀█  ▒████▄    ▒██    ▒ 
▒██░    ▓██  ▒██░▒▓█    ▄ ▒██  ▀█▄  ░ ▓██▄   
▒██░    ▓▓█  ░██░▒▓▓▄ ▄██▒░██▄▄▄▄██   ▒   ██▒
░██████▒▒▒█████▓ ▒ ▓███▀ ░ ▓█   ▓██▒▒██████▒▒
░ ▒░▓  ░░▒▓▒ ▒ ▒ ░ ░▒ ▒  ░ ▒▒   ▓▒█░▒ ▒▓▒ ▒ ░
░ ░ ▒  ░░░▒░ ░ ░   ░  ▒     ▒   ▒▒ ░░ ░▒  ░ ░
  ░ ░    ░░░ ░ ░ ░          ░   ▒   ░  ░  ░  
    ░  ░   ░     ░ ░            ░  ░      ░  
                 ░                           
*/

export default function DoneTaskRender({ task }: Props) {
  const { taskId, taskTitle, taskAuthor } = task;
  const addTask = useTasksStore((state) => state.addTask);
  const removeDoneTask = useDoneTasksStore((state) => state.removeTask);

  function handleDeleteDoneTask() {
    removeDoneTask(task.taskId);
    addTask(task);
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
        <button className="delete" onClick={() => handleDeleteDoneTask()}>
          Delete
        </button>
      </div>
    </div>
  );
}
