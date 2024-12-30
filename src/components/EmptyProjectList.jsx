import projectImg from "../assets/no-projects.png";

export default function EmptyProjectList({ onAddingProject }) {
  return (
    <div className="flex flex-col items-center justify-evenly h-1/3">
      <img src={projectImg} className="h-14 w-14" />
      <h2 className="text-amber-900 text-lg font-bold">No Project Selected</h2>
      <p className="text-amber-700 text-md">
        Select a project or get started with a new one
      </p>
      <button
        className="bg-amber-950 p-2 text-white rounded"
        onClick={onAddingProject}
      >
        Create new project
      </button>
    </div>
  );
}
