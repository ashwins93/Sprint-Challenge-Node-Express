import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';

const API_URL = 'http://localhost:5000';

class App extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    axios
      .get(`${API_URL}/api/projects`)
      .then(response => this.setState({ projects: response.data.data }))
      .catch(console.log);
  }

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => <ProjectList projects={this.state.projects} />}
        />
        <Route exact path="/projects/:id" component={ProjectDetail} />
      </div>
    );
  }
}

export default App;
