import React, { Component } from 'react';
import withStyles from 'react-jss';

const API = 'https://w465z10em8.execute-api.ap-southeast-2.amazonaws.com/prod/slips';

const styles = {
  heading: {
    fontSize: '22px',
  },

  student: {
    borderRadius: '4px',
    background: '#FFF',
    boxShadow: '0 2px 4px #C0C0C0',
    marginBottom: '20px',
    overflow: 'hidden',
  },

  subheading: {
    fontSize: '18px',
    padding: '10px 20px',
    background: '#506DA3',
    color: '#FFF',
    margin: 0,
  },

  details: {
    padding: '10px 20px 10px',
  }

};

const Part = ({ talk, classes }) => (
  <div key={talk.assignmentid} className={classes.student}>
    <h2 className={classes.subheading}>Assignment</h2>
    <div className={classes.details}>
      <p><span>Name:</span> {talk.studentname}</p>
      <p>{talk.assistantname === 'N/A' ? '' : `Assistant: ${talk.assistantname}`}</p>
      <p>Date: {talk.date}</p>
      <p>Counsel Point: {talk.counselpoint}</p>
      <p>Assignment: {talk.assignment}</p>
      <p>To be given in the {talk.location}</p>
    </div>
  </div>
);

const StudentParts = ({ data, classes }) => (
  <div>
    {data.map(talk => (
      <Part key={talk.assignmentid} talk={talk} classes={classes}/>
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
    const { data, isLoading } = this.state;
    const { classes } = this.props;

    if (isLoading) {
      return <p>Loading</p>
    }

    return (
      <div>
        <h1 className={classes.heading}>Our Christian Life and Ministry Meeting Assignment</h1>
        <StudentParts data={data} classes={classes}/>
      </div>
    )
  }
};

export default withStyles(styles)(Student);