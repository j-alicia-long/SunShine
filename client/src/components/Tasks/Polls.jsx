
import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import Poll from "react-polls";
import "../../assets/css/poll-block.css";

// Declaring poll question and answers
// STYLING: https://github.com/viniciusmeneses/react-polls/blob/master/src/index.js
const pollQuestion1 = "Are you a member of one or more PODs?";
const pollAnswers1 = [
  { option: "Yes", votes: 8 },
  { option: "No", votes: 2 },
];

const pollQuestion2 =
  "Which of the following three pillars for D&I needs the most improvement at VMware?";
const pollAnswers2 = [
  { option: "Recruitment", votes: 5 },
  { option: "Representation", votes: 2 },
  { option: "Retention", votes: 3 },
];

const pollQuestion3 =
  "On a daily basis, do you have lunch/social hangouts with people that are not in your ethnic background?";
const pollAnswers3 = [
  { option: "Yes", votes: 21 },
  { option: "No", votes: 13 },
];

const pollQuestion4 = "Feature improvements for spaces on VMware Social?";
const pollAnswers4 = [
  { option: "Formal POD Onboarding", votes: 21 },
  { option: "Event promotion", votes: 13 },
  { option: "Event attendance tracking", votes: 13 },
  { option: "Region membership filters", votes: 13 },
  { option: "POD officers & points of contact page", votes: 13 },
];

class Polls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pollAnswers1: [...pollAnswers1],
    };
  }

  // Handling user vote
  // Increments the votes count of answer when the user votes
  handleVote = (voteAnswer) => {
    const { pollAnswers1 } = this.state;
    const newPollAnswers = pollAnswers1.map((answer) => {
      if (answer.option === voteAnswer) answer.votes++;
      return answer;
    });
    this.setState({
      pollAnswers: newPollAnswers,
    });
  };


  render() {
    const pollCustomStyles = {
      questionBold: false,
      questionSeparator: true,
      theme: 'blue',
    };

    return (
      <div className="polls">
        <div className="card">
          <div className="header">
            <h4 className="title">Polls</h4>
          </div>
          <div className="content">
            <Row>
              <Col lg={6}>
                <Poll
                  question={pollQuestion1}
                  customStyles={pollCustomStyles}
                  answers={pollAnswers1}
                  onVote={this.handleVote}
                />
              </Col>
              <Col lg={6}>
                <Poll
                  question={pollQuestion2}
                  customStyles={pollCustomStyles}
                  answers={pollAnswers2}
                  onVote={this.handleVote}
                />
              </Col>
              {this.props.pollPreview ? <span/> :
                <>
                  <Col lg={6}>
                    <Poll
                      question={pollQuestion3}
                      customStyles={pollCustomStyles}
                      answers={pollAnswers3}
                      onVote={this.handleVote}
                    />
                  </Col>
                  <Col lg={6}>
                    <Poll
                      question={pollQuestion4}
                      customStyles={pollCustomStyles}
                      answers={pollAnswers4}
                      onVote={this.handleVote}
                    />
                  </Col>
                </>
              }
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Polls;
