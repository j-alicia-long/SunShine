import React, { Component } from "react";

import jumbotron from "assets/img/jumbotron.png";
import Surveys from "components/Tasks/Surveys.jsx";

import GlobalMap from "components/TableauEmbed/GlobalMap.js";
import AverageSentiment from "components/TableauEmbed/SurveyData/AverageSentiment.js";
import GenderBreakdowns from "components/TableauEmbed/GenderBreakdowns";
import EthnicBreakdown from "components/TableauEmbed/EthnicBreakdown";

import { Grid, Row, Col, Image } from "react-bootstrap";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Card } from "components/Card/Card.jsx";


class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }

  render() {
    const jumbotronImg = {
      maxWidth: "100%",
      maxHeight: "100%",
      marginBottom: "15px",
    };

    return (
      <div className="content">
        <Grid fluid>
          <Row className="text-right">
            <Col xl={2} lg={3} xs={6}>
              <Card
                content={
                  <Row>
                    <Col sm={4}>
                      <h1><i className="pe-7s-users text-success"/></h1>
                    </Col>
                    <Col sm={8}><h4>Complete your self-report</h4></Col>
                  </Row>
                }
                stats=" "
              />
            </Col>
            <Col xl={2} lg={3} xs={6}>
              <Card
                content={
                  <Row>
                    <Col sm={4}>
                      <h1><i className="pe-7s-graph1 text-warning"/></h1>
                    </Col>
                    <Col sm={8}><h4>View Survey Data</h4></Col>
                  </Row>
                }
                stats=" "
              />
            </Col>
            <Col xl={2} lg={3} xs={6}>
              <Card
                content={
                  <Row>
                    <Col sm={4}>
                      <h1><i className="pe-7s-share text-danger"/></h1>
                    </Col>
                    <Col sm={8}><h4>Explore POD Data</h4></Col>
                  </Row>
                }
                stats=" "
              />
            </Col>
            <Col xl={2} lg={3} xs={6}>
              <a href="https://social.vmware.com/spaces/categories/489">
                <Card
                  content={
                    <Row>
                      <Col sm={4}>
                        <h1><i className="pe-7s-network text-info"/></h1>
                      </Col>
                      <Col sm={8}><h4>Join PODs on VMware Social</h4></Col>
                    </Row>
                  }
                  stats=" "
                />
              </a>
            </Col>
          </Row>
          <Row>
            <Col xl={6} lg={6} sm={6}>
              <Image style={jumbotronImg} src={jumbotron} fluid rounded />
            </Col>
            <Col xl={6} lg={6} sm={6}>
              <Surveys />
            </Col>
          </Row>
          <Row>
            <Col xl={9} md={8}>
              <GlobalMap />
            </Col>
            <Col xl={3} md={4}>
              <AverageSentiment/>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <EthnicBreakdown />
            </Col>
            <Col md={6}>
              <GenderBreakdowns />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
