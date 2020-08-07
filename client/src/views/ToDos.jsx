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
import { Grid, Row, Col } from "react-bootstrap";
import CustomCheckbox from "components/CustomCheckbox/CustomCheckbox";
import * as typeformEmbed from '@typeform/embed';

class ToDos extends Component {
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
        onSubmit: () => console.log('Successfully submitted')
      })

    const developmentSurvey = typeformEmbed.makePopup(
      'https://udishab.typeform.com/to/lb9xigDO',
      {
        mode: 'popup',
        autoClose: 3000,
        hideHeaders: true,
        hideFooter: true,
        onSubmit: () => console.log('Successfully submitted')
      }
    )

    const generalSurvey = typeformEmbed.makePopup(
      'https://udishab.typeform.com/to/nFM62jbT',
      {
        mode: 'popup',
        autoClose: 3000,
        hideHeaders: true,
        hideFooter: true,
        onSubmit: () => console.log('Successfully submitted')
      }
    )

    document.getElementById('1').addEventListener('click', function () {
      belongingSurvey.open();
    })

    document.getElementById('2').addEventListener('click', function () {
      developmentSurvey.open();
    })

    document.getElementById('3').addEventListener('click', function () {
      generalSurvey.open();
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
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default ToDos;
