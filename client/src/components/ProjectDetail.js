import React from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000';

class ProjectDetail extends React.Component {
  state = {
    project: null,
  };

  componentDidMount() {
    axios
      .get(`${API_URL}/api/projects/${this.props.match.params.id}`)
      .then(response => this.setState({ project: response.data.data }))
      .catch(console.log);
  }

  render() {
    const { project } = this.state;

    if (project) {
      return (
        <div>
          <h1>{project.name} </h1>
          <p>{project.description}</p>
          <p>{project.notes}</p>
          <ul>
            {project.actions.map(action => (
              <li key={action.id}>
                <div>{action.description}</div>
                <div>{action.notes}</div>
                <div>Completed: {action.completed ? 'Yes' : 'No'}</div>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default ProjectDetail;
