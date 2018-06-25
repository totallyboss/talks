import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Student from './Student';
import withStyles from 'react-jss';

const styles = {
  root: {
    margin: '20px',
  }
};

const AllTalks = () => (
  <Router>
    <Route path="/:id" component={Student} />
  </Router>
);

class App extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AllTalks/>
      </div>
    );
  };
};

export default withStyles(styles)(App);