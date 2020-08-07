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
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-0.jpg";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:
        JSON.parse(localStorage.getItem("user")) === null
          ? this.props.user
          : JSON.parse(localStorage.getItem("user")),
    };
  }

  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  componentDidMount() {
    console.log(localStorage);
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Edit Profile"
                content={
                  <form>
                    <>
                      <FormInputs
                        ncols={["col-md-6", "col-md-6"]}
                        properties={[
                          {
                            label: "First Name",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "First Name",
                            defaultValue: this.state.user.name.split(", ")[1],
                          },
                          {
                            label: "Last Name",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Last name",
                            defaultValue: this.state.user.name.split(", ")[0],
                          },
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-4", "col-md-8"]}
                        properties={[
                          {
                            label: "Supervisory Org Lvl 2",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Supervisory Org Lvl 2",
                            defaultValue: this.state.user.supervisory_org_level2,
                          },
                          {
                            label: "Supervisory Org Lvl 3",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Last name",
                            defaultValue: this.state.user.supervisory_org_level3,
                          },
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-12"]}
                        properties={[
                          {
                            label: "Office Location",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Office Location",
                            defaultValue: this.state.user.location,
                          },
                        ]}
                      />
                      <Button bsStyle="info" pullRight fill type="submit">
                        Submit Changes
                      </Button>
                    </>

                    <br/><br/>
                    <hr/>
                    <h4>Self-reported Demographics</h4>
                    <br/>

                    <Row style={{ paddingBottom: "10px" }}>
                      <Col md={6}>
                        <label for="ethnicity" style={{ paddingRight: "10px" }}>
                          Ethnicity
                        </label>
                        <select id="ethnicity" name="ethnicity">
                          <option value="white">White</option>
                          <option value="hispanic">Hispanic or Latino</option>
                          <option value="black">
                            Black or African American
                          </option>
                          <option value="native-american">
                            Native American or American Indian
                          </option>
                          <option value="asian">
                            Asian / Pacific Islander
                          </option>
                        </select>
                      </Col>
                      <Col md={6}>
                        <label for="gender" style={{ paddingRight: "10px" }}>
                          Gender
                        </label>
                        <select id="gender" name="gender">
                          <option value="white">Female</option>
                          <option value="hispanic">Male</option>
                          <option value="black">Non-binary/third gender</option>
                          <option value="native-american">
                            Prefer Not to Say
                          </option>
                        </select>
                      </Col>
                    </Row>
                    <Row style={{ paddingBottom: "10px" }}>
                      <Col md={4}>
                        <p style={{ color: "#9A9A9A" }}>
                          Do you identify as LGBTQIA+?
                        </p>
                        <input type="radio" id="yes" value="yes" />
                        <label for="yes" style={{ marginLeft: "4px" }}>
                          Yes
                        </label>
                        <br />
                        <input type="radio" id="no" value=" no" />
                        <label for="no" style={{ marginLeft: "4px" }}>
                          No
                        </label>
                        <br />
                      </Col>
                      <Col md={4}>
                        <p style={{ color: "#9A9A9A" }}>Are you a veteran?</p>
                        <input type="radio" id="yes" value="yes" />
                        <label for="yes" style={{ marginLeft: "4px" }}>
                          Yes
                        </label>
                        <br />
                        <input type="radio" id="no" value=" no" />
                        <label for="no" style={{ marginLeft: "4px" }}>
                          No
                        </label>
                        <br />
                      </Col>
                      <Col md={4}>
                        <p style={{ color: "#9A9A9A" }}>
                          Do you self-identify has having a disability?
                        </p>
                        <input type="radio" id="yes" value="yes" />
                        <label for="yes" style={{ marginLeft: "4px" }}>
                          Yes
                        </label>
                        <br />
                        <input type="radio" id="no" value=" no" />
                        <label for="no" style={{ marginLeft: "4px" }}>
                          No
                        </label>
                        <br />
                      </Col>
                    </Row>
                    <Button bsStyle="warning ml-2" pullRight fill>
                      Sync to WorkDay <i className="fa fa-cloud-upload" />
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage="https://www.vmware.com/content/dam/digitalmarketing/vmware/en/images/icons/vmw-avatar-corporate.png"
                avatar={avatar}
                name={
                  this.state.user.name.split(", ")[1] +
                  " " +
                  this.state.user.name.split(", ")[0]
                }
                userName={this.state.user.supervisory_org_level3}
                description={<span>Place your description here!</span>}
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
