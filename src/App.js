import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/common/header";
import AuthContext from "./lib/contexts/auth.context";
import Login from "./pages/Login";
import "./styles/index.css";

const App = () => {
  const [authState, setAuthState] = useState(undefined);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
