import { useState } from "react";

import ProjectList from "./components/ProjectList";
import EmptyProjectList from "./components/EmptyProjectList";
import AddProjectPage from "./components/AddProjectPage";
import ProjectPage from "./components/ProjectPage";

function App() {
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [projectList, setProjectList] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  console.log(selectedProject);

  function handleAddingProject() {
    setIsAddingProject(true);
    setSelectedProject(null);
  }

  function handleAddProject(newProject) {
    setProjectList((prevProjectList) => [...prevProjectList, newProject]);
    setIsAddingProject(false);
  }

  function handleDeleteProject(project) {
    setProjectList((prevProjectList) =>
      prevProjectList.filter((p) => p !== project)
    );
    setSelectedProject(null);
  }

  function handleCancelProject() {
    setIsAddingProject(false);
  }

  function handleSelectProject(index) {
    setSelectedProject(projectList[index]);
  }

  function handleAddTask(task) {
    setProjectList((prevProjectList) => {
      const newProjectList = prevProjectList.map((project) => {
        if (project === selectedProject) {
          const updatedProject = {
            ...project,
            tasks: [...project.tasks, task],
          };
          setSelectedProject(updatedProject);
          return updatedProject;
        } else {
          return project;
        }
      });
      return newProjectList;
    });
  }

  function handleClearTask(task) {
    setProjectList((prevProjectList) => {
      const newProjectList = prevProjectList.map((project) => {
        if (project === selectedProject) {
          const updatedProject = {
            ...project,
            tasks: project.tasks.filter((t) => t !== task),
          };
          setSelectedProject(updatedProject);
          return updatedProject;
        } else {
          return project;
        }
      });
      return newProjectList;
    });
  }

  return (
    <div className="mt-10 flex flex-row">
      <div className="w-1/4 h-screen bg-black rounded-tr-lg">
        <ProjectList
          projectList={projectList}
          selectedProject={selectedProject}
          onAddingProject={handleAddingProject}
          onSelectProject={handleSelectProject}
        />
      </div>
      <div className="w-3/4 flex h-screen items-center justify-center">
        {isAddingProject && !selectedProject && (
          <AddProjectPage
            onAddProject={handleAddProject}
            onCancelProject={handleCancelProject}
          />
        )}
        {!selectedProject && !isAddingProject && (
          <EmptyProjectList onAddingProject={handleAddingProject} />
        )}
        {selectedProject && (
          <ProjectPage
            project={selectedProject}
            onAddTask={handleAddTask}
            onClearTask={handleClearTask}
            onDeleteProject={handleDeleteProject}
          />
        )}
      </div>
    </div>
  );
}

export default App;
