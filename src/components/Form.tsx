import { Task } from "../types";
import { useState } from "react";
import { useTasksStore } from "../store/tasksStore";

interface Props {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Form({ visible, setVisible }: Props) {
  const { addTask } = useTasksStore((state) => ({
    addTask: state.addTask,
  }));

  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [errorTitle, setErrorTitle] = useState<boolean>(false);
  const [errorAuthor, setErrorAuthor] = useState<boolean>(false);
  const [errorDescription, setErrorDescription] = useState<boolean>(false);

  function handleAdd(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    const titleRegex = /^.{5,15}$/;
    const authorRegex = /^.{5,15}$/;
    const descRegex = /^.{5,40}$/;

    const titleVerification = titleRegex.test(title);
    const authorVerification = authorRegex.test(author);
    const descVerification = descRegex.test(description);

    if (titleVerification) {
      setErrorTitle(false);
    } else {
      setErrorTitle(true);
      console.log("verificación doble");
    }

    if (authorVerification) {
      setErrorAuthor(false);
    } else {
      setErrorAuthor(true);
      console.log("verificación doble");
    }

    if (descVerification) {
      setErrorDescription(false);
    } else {
      setErrorDescription(true);
      console.log("verificación doble");
    }

    if (titleVerification && authorVerification && descVerification) {
      setVisible(false);
      setTitle("");
      setAuthor("");
      setDescription("");

      setErrorAuthor(false);
      setErrorDescription(false);
      setErrorTitle(false);

      const task: Task = {
        taskId: crypto.randomUUID(),
        taskTitle: title,
        taskAuthor: author,
        taskDescription: description,
      };
      addTask(task);
    } else {
    }
  }

  function handleCancelButton() {
    setVisible(false);

    setTitle("");
    setAuthor("");
    setDescription("");

    setErrorAuthor(false);
    setErrorDescription(false);
    setErrorTitle(false);
  }

  return (
    <form
      className={visible ? "visible" : undefined}
      onSubmit={(e) => e.preventDefault()}
    >
      <label className={errorTitle ? "error" : undefined}>
        {errorTitle
          ? "Task's title must be 5-15 chars long"
          : "Enter the task's title"}
      </label>
      <input
        type="text"
        className={errorTitle ? "error" : undefined}
        placeholder="Go for a walk..."
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label className={errorAuthor ? "error" : undefined}>
        {errorAuthor
          ? "Task's author must be 5-15 chars long"
          : "Enter the task's author"}{" "}
      </label>
      <input
        type="text"
        className={errorAuthor ? "error" : undefined}
        placeholder="John Johnson..."
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
      />

      <label className={errorDescription ? "error" : undefined}>
        {errorDescription
          ? "Task's description must be 5-40 chars long"
          : "Enter the task's description"}
      </label>
      <input
        type="text"
        className={errorDescription ? "error" : undefined}
        placeholder="Go for a walk..."
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <div className="buttons">
        <button className="add" onClick={handleAdd}>
          Add Task
        </button>
        <button className="cancel" onClick={handleCancelButton}>
          Cancel
        </button>
      </div>
    </form>
  );
}
