import TasksColumn from "./components/TasksColumn";
import Form from "./components/Form";
import { useState } from "react";
import InProcessTaskColumn from "./components/InProcessTasksColumn";
import DoneTaskColumn from "./components/DoneTasksColumn";

export default function App() {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="App">
      <div className="button-div">
        <button onClick={() => setVisible(true)}>Add task</button>
      </div>

      <Form visible={visible} setVisible={setVisible} />

      <div className="columns">
        <TasksColumn />
        <InProcessTaskColumn />
        <DoneTaskColumn />
      </div>
    </div>
  );
}
