import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Projects from './views/Projects';
import Contact from './views/Contact';
import AboutMe from './views/AboutMe';
import CoffeeApp from './views/CoffeeApp';
import ChirprApp from './views/ChirprApp';
import NavBar from './components/NavBar';
import FootBar from './components/FootBar';
import RootLayout from './components/RootLayout';
import './App.css';

const App = () => {
      return (
        <BrowserRouter>
          <RootLayout>
          <NavBar />
            <Switch>
              <Route exact path = '/'>
                <Home />
              </Route>
              <Route exact path = '/projects'>
                <Projects />
              </Route>
              <Route exact path = '/projects/coffeeapp'>
                <CoffeeApp />
              </Route>
              <Route exact path = '/projects/chirprapp'>
                <ChirprApp />
              </Route>
              <Route exact path = '/contact'>
                <Contact />
              </Route>
              <Route exact path = '/aboutme'>
                <AboutMe />
              </Route>
            </Switch>
            <FootBar />
            </RootLayout>
        </BrowserRouter>
      );
};

export default App;
