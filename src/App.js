import React, { Component } from 'react';
import withStyles from 'react-jss';

const API1 = 'https://api.jsonbin.io/b/5b302697ff58130c9a78fd0f'; // Vaughn
const API2 = 'https://api.jsonbin.io/b/5b3026e3261ab84817a87e4a'; // Joel
const API3 = 'https://api.jsonbin.io/b/5b30276f9bc3d973f056dd6d'; // Candace, 2 entries

const styles = {
  root: {
    margin: '20px',
  }
};

const Entry = ({entry}) => (
  <div key={entry.assignmentid}>
    <p>Name: {entry.studentname}</p>
    <p>Assignment: {entry.assignment}</p>
    <p>{entry.date}</p>
    <p>{entry.counselpoint}</p>
    <p>{entry.location}</p>
    <p>{entry.assistantname}</p>
  </div>
);

const Talks = ({data}) => (
  <div>
    {data.map(talk => (
      <Entry entry={talk} />
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

    fetch(API1)
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
        <Talks data={data}/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
