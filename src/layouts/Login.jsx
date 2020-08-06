import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/auth";
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
import "assets/css/main.css";
import "assets/css/util.css";

const Login = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userId, setUserId] = useState("");
  const { setAuthTokens } = useAuth();

  function postLogin(e) {
    e.preventDefault();
    axios
      .get(`http://localhost:3001/users/1${userId}`)
      .then((result) => {
        if (result.status === 200) {
          // make the current user logged in
          setAuthTokens(result.data.token);
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
      });
  }

  if (isLoggedIn) {
    return <Redirect to="/admin/dashboard" />;
  }

  return (
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100 p-t-85 p-b-20">
          <form class="login100-form validate-form" onSubmit={postLogin}>
            <span class="login100-form-title p-b-70">Welcome</span>

            <div
              class="wrap-input100 validate-input m-t-85 m-b-35"
              data-validate="Enter username"
            >
              <input
                class="input100"
                type="text"
                name="username"
                onChange={(e) => setUserId(e.target.value)}
              />
              <span
                class="focus-input100"
                data-placeholder="Employee ID"
              ></span>
            </div>

            <div class="container-login100-form-btn">
              <button class="login100-form-btn" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
