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
import Dashboard from "views/Dashboard.jsx";
import SurveyData from "views/SurveyData";
import Pods from "views/Pods";
import UserProfile from "views/UserProfile.jsx";
import ToDos from "views/ToDos.jsx";

const dashboardRoutes = [{
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/pods",
    name: "PODs",
    icon: "pe-7s-global",
    component: Pods,
    layout: "/admin"
  },
  {
    path: "/survey-data",
    name: "D&I Survey Data",
    icon: "pe-7s-note2",
    component: SurveyData,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/todos",
    name: "To Dos",
    icon: "pe-7s-bell",
    component: ToDos,
    layout: "/admin"
  },
];

export default dashboardRoutes;
