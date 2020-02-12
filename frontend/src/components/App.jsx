import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SearchMap from "./searchMap/SearchMap";
import Navbar from "./navbar/Navbar";
import DonorSignupForm from "./donorSignupForm/DonorSignupForm";
import DontateForm from "./donateForm/DonateForm";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={SearchMap} />
        <Route path="/donors/signup" component={DonorSignupForm} />
        <Route path="/donate" component={DontateForm} />
      </Switch>
    </Router>
  );
};

export default App;
