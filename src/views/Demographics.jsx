import React, { Component } from "react";

import PODMemberCounts from "components/TableauEmbed/PODMemberCounts.js";
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
              <Col md={5}>
                <PODMemberCounts/>
              </Col>

              <Col md={5}>
                  <PODMemberCounts/>
            </Col>
            </Row>
          </Grid>
        </div>
      );
    }
  }

export default Demographics;