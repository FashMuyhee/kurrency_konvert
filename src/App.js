import React, { Component } from 'react';
import Index from './pages/index';
// import Conversion from './pages/conversion';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Error from './pages/error';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';

const options = {
  timeout: 5000,
  position: "bottom center",
  transition: "fade",
}

/* const theme = createMuiTheme({
  palette: {
    primary: { main:"#2ee7e7"},
    secondary:{main: "#ffc117"}
  },
}); */

class App extends Component {
  render() {
    return (
      <AlertProvider template={AlertTemplate} {...options}>
        <Index />
      </AlertProvider>
    );
  }
}

export default App;