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
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class AdminNavbarLinks extends Component {
  render() {
    const taskList = (
      <div>
        <i className="fa fa-pencil" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">To Dos</p>
      </div>
    );
    return (
      <div>
        <Nav>
          <NavItem eventKey={1} href="/admin/dashboard">
            <i className="fa fa-dashboard" />
            <p className="hidden-lg hidden-md">Dashboard</p>
          </NavItem>
          <NavDropdown
            eventKey={2}
            title={taskList}
            noCaret
            id="basic-nav-dropdown"
          >
            <MenuItem eventKey={2.1} href="/admin/todos">Profile Setup</MenuItem>
            <MenuItem eventKey={2.2} href="/admin/todos">Personal Belonging Survey</MenuItem>
            <MenuItem eventKey={2.3} href="/admin/todos">Professional Development Survey</MenuItem>
            <MenuItem eventKey={2.4} href="/admin/todos">Monthly General Survey</MenuItem>
            <MenuItem eventKey={2.5} href="/admin/todos">Implicit Bias Test 1</MenuItem>
          </NavDropdown>
          <NavItem eventKey={3} href="#">
            <i className="fa fa-search" />
            <p className="hidden-lg hidden-md">Search</p>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Account
          </NavItem>
          <NavItem eventKey={3} href="#">
            Log out
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
