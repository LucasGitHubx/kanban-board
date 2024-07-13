import { useDoneTasksStore } from "../store/doneTasksStore";
import DoneTaskRender from "./DoneTaskRender";

export default function DoneTaskColumn() {
  const { doneTasks } = useDoneTasksStore((state) => ({
    doneTasks: state.tasks,
  }));

  return (
    <div className="done-tasks column-task">
      <h2>Done Tasks</h2>
      {doneTasks.length === 0 ? (
        <h3>No done tasks for the moment...</h3>
      ) : (
        <div className="tasks">
          {doneTasks.map((task) => {
            return <DoneTaskRender task={task} />;
          })}
        </div>
      )}
    </div>
  );
}
