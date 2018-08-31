import React from 'react';

const ProjectList = ({ projects }) => (
  <div>
    {projects.map(project => (
      <div>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <label>
          Completed:
          <input type="checkbox" checked={project.completed} />
        </label>
      </div>
    ))}
  </div>
);

export default ProjectList;
