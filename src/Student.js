import React, { Component } from 'react';
import withStyles from 'react-jss';

const API = 'https://w465z10em8.execute-api.ap-southeast-2.amazonaws.com/prod/slips';

const styles = {
  root: {
    padding: '20px',
  },
  talk: {

  }
};

const Part = ({ talk }) => (
  <div key={talk.assignmentid}>
    <p>Name: {talk.studentname}</p>
    <p>{talk.assistantname === 'N/A' ? '' : `Assistant: ${talk.assistantname}`}</p>
    <p>Date: {talk.date}</p>
    <p>Counsel Point: {talk.counselpoint}</p>
    <p>Assignment: {talk.assignment}</p>
    <p>To be given in the {talk.location}</p>
  </div>
);

const StudentParts = ({ data }) => (
  <div>
    {data.map(talk => (
      <Part key={data.assignmentid} talk={talk} />
    ))}
  </div>
);

class Student extends Component {

  state = {
    isLoading: false,
    data: []
  };

  getData = () => {
    const ID = this.props.match.params.id;
    const FullAPI = `${API}/?studentid=${ID}`;

    this.setState({
      isLoading: true,
    });

    fetch(FullAPI)
      .then(response => response.json())
      .then(data => this.setState({ data: data, isLoading: false}))
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { data } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <StudentParts data={data} />
      </div>
    )
  }
};

export default withStyles(styles)(Student);