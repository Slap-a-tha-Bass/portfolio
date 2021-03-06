import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import Resume from "./views/Resume";
import CoffeeApp from "./views/CoffeeApp";
import ChirprApp from "./views/ChirprApp";
import NavBar from "./components/NavBar";
import About from "./views/About";
import FootBar from "./components/FootBar";
import RootLayout from "./components/RootLayout";
import ScrollToTop from './components/ScrollToTop';

import "./App.css";
import ChessApp from "./views/ChessApp";
import PeriodicTableApp from "./views/PeriodicTableApp";
import ProsciLab from "./views/ProsciLab";
import CovidTracker from "./views/CovidTracker";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RootLayout>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/projects/coffeeapp">
            <CoffeeApp />
          </Route>
          <Route exact path="/projects/chirprapp">
            <ChirprApp />
          </Route>
          <Route exact path="/projects/chessapp">
            <ChessApp />
          </Route>
          <Route exact path="/projects/periodictableapp">
            <PeriodicTableApp />
          </Route>
          <Route exact path="/projects/proscilab">
            <ProsciLab />
          </Route>
          <Route exact path="/projects/covidtracker">
            <CovidTracker />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
        </Switch>
        <FootBar />
      </RootLayout>
    </BrowserRouter>
  );
};

export default App;
