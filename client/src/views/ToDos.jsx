/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Grid, Row, Col, Alert } from "react-bootstrap";
import CustomCheckbox from "components/CustomCheckbox/CustomCheckbox";
import * as typeformEmbed from '@typeform/embed';

import Poll from 'react-polls';
 
// Declaring poll question and answers
// STYLING: https://github.com/viniciusmeneses/react-polls/blob/master/src/index.js
const pollQuestion1 = 'Are you a member of one or more PODs?'
const pollAnswers1 = [
  { option: 'Recruitment', votes: 5 },
  { option: 'Representation', votes: 2 },
  { option: 'Retention', votes: 3 }
]

const pollQuestion2 = 'Which of the following three pillars for D&I needs the most improvement at VMware?'
const pollAnswers2 = [
  { option: 'Yes', votes: 8 },
  { option: 'No', votes: 2 }
]

const pollQuestion3 = 'On a daily basis, do you have lunch/social hangouts with people that are not in your ethnic background?'
const pollAnswers3 = [
  { option: 'Yes', votes: 21 },
  { option: 'No', votes: 13 }
]

const pollQuestion4 = 'Features improvements for spaces on social.vmware.com'
const pollAnswers4 = [
  { option: 'Formal POD Onboarding', votes: 21 },
  { option: 'Event promotion', votes: 13 },
  { option: 'Event attendance tracking', votes: 13 },
  { option: 'Region membership filters', votes: 13 },
  { option: 'POD officers & points of contact page', votes: 13 }
]

class ToDos extends Component {
  state = {
    pollAnswers1: [...pollAnswers1]
  }
 
  // Handling user vote
  // Increments the votes count of answer when the user votes
  handleVote = voteAnswer => {
    const { pollAnswers1 } = this.state
    const newPollAnswers = pollAnswers1.map(answer => {
      if (answer.option === voteAnswer) answer.votes++
      return answer
    })
    this.setState({
      pollAnswers: newPollAnswers
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      arr: [
        { name: "Complete Profile Setup", clicked: false },
        { name: "Fill Out Belonging Survey", clicked: false },
        { name: "Fill Out Professional Development Survey", clicked: false },
        { name: "Fill Out Monthly Sentiment Survey", clicked: false },
        { name: "Implicit Bias Test 1", clicked: false },
        { name: "Implicit Bias Test 2", clicked: false },

      ]
    };
  }

  componentDidMount() {
    const belongingSurvey = typeformEmbed.makePopup(
      'https://udishab.typeform.com/to/kyXsKDLO',
      {
        mode: 'popup',
        autoClose: 3000,
        hideHeaders: true,
        hideFooter: true,
        onSubmit: () => console.log('Successfully submited')
      })

    const developmentSurvey = typeformEmbed.makePopup(
      'https://udishab.typeform.com/to/lb9xigDO',
      {
        mode: 'popup',
        autoClose: 3000,
        hideHeaders: true,
        hideFooter: true,
        onSubmit: () => console.log('Successfully submited')
      }
    )

    document.getElementById('1').addEventListener('click', function () {
      belongingSurvey.open();
    })

    document.getElementById('2').addEventListener('click', function () {
      developmentSurvey.open();
    })
  }




  render() {
    return (
      <div className="content">
        <Grid fluid>
          <div className="card">
            <div className="header">
              <h4 className="title">Tasks</h4>
            </div>
            <div className="content">
              <Row>
                <Col md={12}>
                  {this.state.arr.map((elem, idx) => {
                    return <CustomCheckbox
                              number={idx}
                              label={elem.name}
                              isChecked={elem.clicked}
                           />
                  })}
                </Col>
              </Row>
              <Row>
                <Col lg={3}>
                    <Poll question={pollQuestion1} answers={pollAnswers1} onVote={this.handleVote} />
                </Col>
                <Col lg={3}>
                    <Poll question={pollQuestion2} answers={pollAnswers2} onVote={this.handleVote} />
                </Col>
                <Col lg={3}>
                    <Poll question={pollQuestion3} answers={pollAnswers3} onVote={this.handleVote} />
                </Col>
                <Col lg={3}>
                    <Poll question={pollQuestion4} answers={pollAnswers4} onVote={this.handleVote} />
                </Col>
            </Row>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default ToDos;
