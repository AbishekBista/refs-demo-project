import { useRef } from "react";

export default function ProjectPage({
  project,
  onAddTask,
  onClearTask,
  onDeleteProject,
}) {
  const taskRef = useRef();
  const hasTasks = project.tasks.length > 0;

  function formatDate(date) {
    const dateString = new Date(date);
    return dateString.toDateString();
  }

  function handleInput() {
    onAddTask(taskRef.current.value);
    taskRef.current.value = "";
  }
  return (
    <div className="flex flex-col items-start justify-evenly w-4/5 gap-4">
      <div className="flex flex-row justify-between w-full items-baseline">
        <h1 className="font-bold text-3xl">{project.title}</h1>
        <button
          className="font-semibold hover:font-bold"
          onClick={() => onDeleteProject(project)}
        >
          Delete
        </button>
      </div>

      <p className="text-stone-500">{formatDate(project.date)}</p>

      {project.description.map((line) => (
        <p key={line}>{line}</p>
      ))}

      <hr className="w-full bg-stone-300 h-1" />
      <h2 className="font-bold text-2xl">Tasks</h2>

      <div className="flex flex-row w-full gap-5 items-center">
        <input
          ref={taskRef}
          type="text"
          className="w-1/2 bg-stone-300 p-2 rounded"
        />
        <button className="text-lg" onClick={handleInput}>
          Add Task
        </button>
      </div>
      {!hasTasks && <p>This project does ont have any tasks yet.</p>}
      {hasTasks &&
        project.tasks.map((task) => {
          return (
            <div
              key={task}
              className="flex flex-row justify-between bg-stone-200 w-full py-5 px-3 rounded items-center"
            >
              <p>{task}</p>
              <button
                onClick={() => onClearTask(task)}
                className="hover:text-red-500"
              >
                Clear
              </button>
            </div>
          );
        })}
    </div>
  );
}
