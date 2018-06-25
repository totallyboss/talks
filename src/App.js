import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Student from './Student';

const AllTalks = () => (
  <Router>
    <Route path="/:id" component={Student} />
  </Router>
);

class App extends Component {

  render() {
    return (
      <div>
        <AllTalks/>
      </div>
    );
  };
};

export default App;