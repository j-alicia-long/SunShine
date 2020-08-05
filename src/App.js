import React, { useState } from "react";
import Login from "./layouts/Login";
import { AuthContext } from "./context/auth";
import AdminLayout from "layouts/Admin.jsx";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  Router,
  Link,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <BrowserRouter>
        <Route path="/login" component={Login} />
        <PrivateRoute
          path="/admin"
          render={(props) => <AdminLayout {...props} />}
        />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
