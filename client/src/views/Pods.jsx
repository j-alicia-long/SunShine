import React, { Component } from "react";

import GlobalMap from "components/TableauEmbed/GlobalMap.js";
import PODMemberCounts from "components/TableauEmbed/PODMemberCounts";
import GenderBreakdowns from "components/TableauEmbed/GenderBreakdowns";
import EthnicBreakdown from "components/TableauEmbed/EthnicBreakdown";
import PODInvolvementbyBU from "components/TableauEmbed/PODInvolvementbyBU";
import PODInvolmentByManagerialLevel from "components/TableauEmbed/PODInvolmentByManagerialLevel.js";

import { Grid, Row, Col, Image } from "react-bootstrap";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";


class Pods extends Component {
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
          <Row>
            <Col xl={2} lg={3} sm={6}>
              <StatsCard
                // Name of these icons can be found here: https://themes-pixeden.com/font-demos/7-stroke/
                bigIcon={<i className="pe-7s-users text-success" />}
                statsText="Total POD Membership"
                statsValue="5055 "
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Updated on 08/06/2020"
              />
            </Col>
            <Col xl={2} lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-warning" />}
                statsText="Employee POD Involvement"
                statsValue="11.4% "
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Updated on 08/06/2020"
              />
            </Col>
            <Col xl={2} lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-share text-danger" />}
                statsText="Total Demographic PODs"
                statsValue="7 "
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Updated on 08/06/2020"
              />
            </Col>
            <Col xl={2} lg={3} sm={6}>
              <a href="https://social.vmware.com/spaces/categories/489">
                <StatsCard
                  bigIcon={<i className="pe-7s-network text-info" />}
                  statsText="VMware D&I Social Spaces"
                  statsValue="52 "
                  statsIcon={<i className="fa fa-calendar-o" />}
                  statsIconText="Updated on 08/06/2020"
                />
              </a>
            </Col>
          </Row>
          <Row>
            <Col xl={4} lg={6}>
              <PODMemberCounts />
            </Col>
            <Col xl={4} lg={6}>
              <GlobalMap />
            </Col>
            <Col xl={4} md={6}>
              <PODInvolvementbyBU />
            </Col>
            <Col xl={4} md={6}>
              <PODInvolmentByManagerialLevel />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Pods;
