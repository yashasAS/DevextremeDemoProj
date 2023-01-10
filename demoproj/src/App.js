import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import Registration  from "./pages/Registration";


function App() {

  return (
    <Router>
      <div>
        
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
        

        <hr />
        <Switch>
        <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/registration">
            <Registration/>
          </Route>
        </Switch>
          
        
      </div>
    </Router>
  );

}



export default App;



