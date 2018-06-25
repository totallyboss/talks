import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const API = 'https://api.jsonbin.io/b/';
const API1 = '5b302697ff58130c9a78fd0f'; // Vaughan

const Talk = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

const Talks = () => (
  <Router>
    <div>
      <Route path="/:id" component={Talk} />
    </div>
  </Router>
);

class Assignments extends Component {
  state = {
    data: [],
    isLoading: false
  };

  getId = () => {

  };

  getData = () => {
    this.setState({
      isLoading: true,
    });

    fetch(`${API}${API1}`)
    // fetch(APIsingle)
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
      <div>
        <Talks/>
      </div>
    );
  }
};

export default Assignments;