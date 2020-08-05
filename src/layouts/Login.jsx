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
import Button from "components/CustomButton/CustomButton.jsx";

const Login = () => {
  const [user, setUser] = React.useState({});

  function postLogin() {
    // axios
    //   .get("")
    //   .then((result) => {
    //     if (result.status === 200) {
    //       // make the current user logged in
    //       setAuthTokens(result.data);
    //       setLoggedIn(true);
    //     } else {
    //       setIsError(true);
    //     }
    //   })
    //   .catch((e) => {
    //     setIsError(true);
    //   });
  }

  return <div className="content">login page</div>;
};

export default Login;
