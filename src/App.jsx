import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Projects from './views/Projects';
import Contact from './views/Contact';
import NavBar from './components/NavBar';
import './App.css';


const App = () => {
      return (
        <BrowserRouter>
          <NavBar />
            <Switch>
              <Route exact path = '/'>
                <Home />
              </Route>
              <Route exact path = '/projects'>
                <Projects />
              </Route>
              <Route exact path = '/contact'>
                <Contact />
              </Route>
            </Switch>
        </BrowserRouter>
      );
};

export default App;
