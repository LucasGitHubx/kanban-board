import { useTasksStore } from "../store/tasksStore";
import TaskRender from "./TaskRender";

export default function TasksColumn() {
  const { tasks } = useTasksStore((state) => ({
    tasks: state.tasks,
  }));

  return (
    <div className="all-tasks column-task">
      <h2>Tasks</h2>

      {tasks.length === 0 ? (
        <h3>No tasks for the moment...</h3>
      ) : (
        <div className="tasks">
          {tasks.map((task) => {
            return <TaskRender task={task} />;
          })}
        </div>
      )}
    </div>
  );
}
