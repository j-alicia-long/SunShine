import React, { Component } from "react";

import vmInclusionLogo from "assets/img/vminclusion.png";
import Polls from "components/Tasks/Polls.jsx";

import OverallEnjoymentDonut from "components/TableauEmbed/Donuts/OverallEnjoymentDonut.js";
import ProfessionalDevelopmentSatisfactionDonut from "components/TableauEmbed/Donuts/ProfessionalDevelopmentSatisfactionDonut.js";
import BelongingSatisfactionDonut from "components/TableauEmbed/Donuts/BelongingSatisfactionDonut.js";
import TeamDiversityDonut from "components/TableauEmbed/Donuts/TeamDiversityDonut.js";
import DiverseWorkPartnersDonut from "components/TableauEmbed/Donuts/DiverseWorkPartnersDonut.js";

import SurveySentiments from "components/TableauEmbed/SurveyData/SurveySentiments.js";
import AverageSentiment from "components/TableauEmbed/SurveyData/AverageSentiment.js";

import { StatsCard } from "components/StatsCard/StatsCard.jsx";

import { Grid, Row, Col, Button, Image } from "react-bootstrap";

class SurveyData extends Component {
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
      const bannerImg = {
        maxWidth: "100%",
        maxHeight: "100%",
        marginBottom: "15px",
      };

      return (
        <div className="content">
          <Grid fluid>
            <Row>
              <p>Note: data below is not actual employee data and only for the purpose of a proof of concept</p>
            </Row>
            <Row>
              <Col xl={3} lg={4} sm={6}>
                <StatsCard
                  // Name of these icons can be found here: https://themes-pixeden.com/font-demos/7-stroke/
                  bigIcon={<i className="pe-7s-like text-danger" />}
                  statsText="Belonging Survey"
                  statsValue="+23.4% Positive Sentiment "
                  statsIcon={<i className="fa fa-calendar-o" />}
                  statsIconText="Updated on 08/06/2020"
                />
              </Col>
              <Col xl={3} lg={4} sm={6}>
                <StatsCard
                  bigIcon={<i className="pe-7s-like text-danger" />}
                  statsText="Professional Development Survey"
                  statsValue="16.5% Positive Sentiment "
                  statsIcon={<i className="fa fa-calendar-o" />}
                  statsIconText="Updated on 08/06/2020"
                />
              </Col>
              <Col xl={3} lg={4} sm={6}>
                <Image style={bannerImg} src={vmInclusionLogo} fluid />
                <Button variant="success" size="lg" block>
                  <h4>Take Surveys</h4>
                </Button>
              </Col>
            </Row>

            <Row>
              <Col lg={3} md={6}>
                <OverallEnjoymentDonut/>
              </Col>
              <Col lg={3} md={6}>
                <ProfessionalDevelopmentSatisfactionDonut/>
              </Col>
              <Col lg={3} md={6}>
               <BelongingSatisfactionDonut/>
              </Col>
              <Col lg={3} md={6}>
               <TeamDiversityDonut/>
              </Col>
            </Row>

            <Polls pollPreview={true}/>

            <Row>
              <Col lg={6}>
                <AverageSentiment/>
              </Col>
              <Col lg={6}>
                <SurveySentiments/>
              </Col>
            </Row>
          </Grid>
        </div>
      );
    }
  }

export default SurveyData;
