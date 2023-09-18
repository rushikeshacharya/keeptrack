import React, { Fragment } from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import ProjectList from "./ProjectList";
import { Project } from "./Project";
import { useState } from "react";

function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);

  const saveProject = (project: Project) => {
    console.log("Saving Project", project);
    let updatedProjects = projects.map((p: Project) => {
      return p.id === project.id ? project : p;
    });
    setProjects(updatedProjects);
  };
  return (
    <Fragment>
      <h1>Projects</h1>
      <ProjectList projects={projects} onSave={saveProject} />
    </Fragment>
  );
}

export default ProjectsPage;
