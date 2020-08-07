
import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Polls from "components/Tasks/Polls.jsx";
import Surveys from "components/Tasks/Surveys.jsx";


class ToDos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="content">
        <Grid fluid className="todo">
          <Surveys/>
          <Polls pollPreview={false}/>
        </Grid>
      </div>
    );
  }
}

export default ToDos;
