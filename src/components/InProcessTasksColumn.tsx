import { useProcessTasksStore } from "../store/processTasksStore";
import ProcessTaskRender from "./ProcessTaskRender";

export default function InProcessTaskColumn() {
  const { processTasks } = useProcessTasksStore((state) => ({
    processTasks: state.tasks,
  }));

  return (
    <div className="process-tasks column-task">
      <h2>In Process Tasks</h2>
      {processTasks.length === 0 ? (
        <h3>No in process tasks for the moment...</h3>
      ) : (
        <div className="tasks">
          {processTasks.map((task) => {
            return <ProcessTaskRender task={task} />;
          })}
        </div>
      )}
    </div>
  );
}
