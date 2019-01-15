import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/project/Home";
import Navbar from "./components/project/Navbar";
import TreasureDetail from "./components/project/TreasureDetail";
import AddTreasure from "./components/project/AddTreasure";
import EditTreasure from "./components/project/EditTreasure";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import Footer from "./components/project/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/addtreasure" component={AddTreasure} />
            <Route path="/edittreasure/:id" component={EditTreasure} />
            <Route exact path="/treasures" component={Home} />
            <Route path="/treasures/:id" component={TreasureDetail} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
