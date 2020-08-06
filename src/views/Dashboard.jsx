import React, { Component } from "react";

import GlobalMap from "components/TableauEmbed/GlobalMap.js";
import PODMap from "components/TableauEmbed/PODMap.js";
import PODMemberCounts from "components/TableauEmbed/PODMemberCounts";
import GenderBreakdowns from "components/TableauEmbed/GenderBreakdowns";
import EthnicBreakdown from "components/TableauEmbed/EthnicBreakdown";
import PODInvolvementbyBU from "components/TableauEmbed/PODInvolvementbyBU";
import PODInvolmentByManagerialLevel from "components/TableauEmbed/PODInvolmentByManagerialLevel.js";

import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";

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
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={4} sm={6}>
              <StatsCard
                // Name of these icons can be found here: https://themes-pixeden.com/font-demos/7-stroke/
                bigIcon={<i className="pe-7s-users text-success" />}
                statsText="Overall POD Involvement Number"
                statsValue="5055 "
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Updated on 08/06/2020"
              />
            </Col>
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-warning" />}
                statsText="Overall POD Involvement"
                statsValue="11.4% "
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Updated on 08/06/2020"
              />
            </Col>
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-share text-danger" />}
                statsText="Demographic PODs"
                statsValue="7 "
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Updated on 08/06/2020"
              />
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <PODMemberCounts/>
            </Col>
            <Col lg={6}>
              <GlobalMap/>
            </Col>
          </Row>

          <Row>
            <Col lg={6} md={6}>
              <EthnicBreakdown/>
            </Col>
            <Col lg={6} md={6}>
              <GenderBreakdowns/>
            </Col>
          </Row>

          <Row>
            <Col lg={6} md={6}>
              <PODInvolvementbyBU/>
            </Col>
            <Col lg={6} md={6}>
              <PODInvolmentByManagerialLevel/>
            </Col>
          </Row>

        </Grid>
      </div>
    );
  }
}

export default Dashboard;
