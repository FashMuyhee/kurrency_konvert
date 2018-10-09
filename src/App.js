import React, { Component } from 'react';
import Index from './pages/index';
import Convert from './pages/convert';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Error from './pages/error';

import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';

const options = {
  timeout: 5000,
  position: "bottom center",
  transition: "fade",
}

class App extends Component {
  render() {
    return (
      <AlertProvider template={AlertTemplate} {...options}>
        <Router>
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/convert" component={Convert} />
          </Switch>
        </Router>
      </AlertProvider>
    );
  }
}

export default App;