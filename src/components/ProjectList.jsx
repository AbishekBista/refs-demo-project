export default function ProjectList({
  projectList,
  onAddingProject,
  onSelectProject,
  selectedProject,
}) {
  return (
    <section className="pt-20 pl-10">
      <p className="text-2xl text-white">YOUR PROJECTS</p>
      <button
        className="mt-5 bg-slate-400 p-2 rounded text-white"
        onClick={onAddingProject}
      >
        + Add Project
      </button>

      <div className="mt-5">
        {projectList.map((project, index) => (
          <button
            key={project.title}
            className={`text-start text-lg mb-2 w-3/4 ${
              selectedProject === project
                ? "bg-stone-400 text-white rounded"
                : "text-stone-500"
            }`}
            onClick={() => onSelectProject(index)}
          >
            {project.title}
          </button>
        ))}
      </div>
    </section>
  );
}
