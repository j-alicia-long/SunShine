import React, { Component } from "react";

import OverallEnjoymentDonut from "components/TableauEmbed/Donuts/OverallEnjoymentDonut.js";
import ProfessionalDevelopmentSatisfactionDonut from "components/TableauEmbed/Donuts/ProfessionalDevelopmentSatisfactionDonut.js";
import BelongingSatisfactionDonut from "components/TableauEmbed/Donuts/BelongingSatisfactionDonut.js";
import TeamDiversityDonut from "components/TableauEmbed/Donuts/TeamDiversityDonut.js";
import DiverseWorkPartnersDonut from "components/TableauEmbed/Donuts/DiverseWorkPartnersDonut.js";

import { Grid, Row, Col } from "react-bootstrap";

class Demographics extends Component {
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
              <Col md={2}>
                <OverallEnjoymentDonut/>
              </Col>

              <Col md={2}>
                <ProfessionalDevelopmentSatisfactionDonut/>
              </Col>

              <Col md={2}>
               <BelongingSatisfactionDonut/>
              </Col>

              <Col md={2}>
               <TeamDiversityDonut/>
              </Col>

              <Col md={2}>
               <DiverseWorkPartnersDonut/>
              </Col>
            </Row>
          </Grid>
        </div>
      );
    }
  }

export default Demographics;