import React from 'react';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => (
  <div>
    {projects.map(project => (
      <div key={project.id}>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <div>
          <label>
            Completed:
            <input type="checkbox" checked={project.completed} />
          </label>
        </div>
        <Link to={`/projects/${project.id}`}>View</Link>
      </div>
    ))}
  </div>
);

export default ProjectList;
