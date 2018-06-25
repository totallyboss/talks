import React, { Component } from 'react';
import withStyles from 'react-jss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const APIreal = 'https://w465z10em8.execute-api.ap-southeast-2.amazonaws.com/prod/slips';
const API = 'https://api.jsonbin.io/b/';
const API1 = 'https://api.jsonbin.io/b/5b302697ff58130c9a78fd0f'; // Vaughn
const API2 = 'https://api.jsonbin.io/b/5b3026e3261ab84817a87e4a'; // Joel
const API3 = 'https://api.jsonbin.io/b/5b30276f9bc3d973f056dd6d'; // Candace, 2 entries

const styles = {
  root: {
    margin: '20px',
  },

  talk: {
    borderBottom: 'solid 1px #C0C0C0',
    paddingBottom: '30px',
  }
};

const Entry = ({entry, classes}) => (
  <div className={classes.talk} key={entry.assignmentid}>
    <p>Name: {entry.studentname}</p>
    <p>Assignment: {entry.assignment}</p>
    <p>Date: {entry.date}</p>
    <p>Counsel Point: {entry.counselpoint}</p>
    <p>School: {entry.location}</p>
    <p>Assistant: {entry.assistantname}</p>
  </div>
);

const Talks = ({data, classes}) => (
  <div>
    {data.map(talk => (
      <Entry key={data.assignmentid} entry={talk} classes={classes}/>
    ))}
  </div>
);

class App extends Component {

  state = {
    data: [],
    isLoading: false
  };

  getData = () => {
    this.setState({
      isLoading: true,
    });

    fetch(APIreal)
      .then(response => response.json())
      .then(data => this.setState({ data: data, isLoading: false }));

  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { data, isLoading } = this.state;
    const { classes } = this.props;

    if (isLoading) {
      return <p>Loading</p>
    }

    return (
      <div className={classes.root}>
        <Talks data={data} classes={classes}/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
