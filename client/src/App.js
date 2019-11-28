import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import{blue, purple} from "@material-ui/core/colors";
import HomePage from './Pages/HomePage';
import ResumePage from './Pages/ResumePage';
import PortfolioPage from './Pages/PortfoliPage';
import ContactPage from './Pages/ContactPage';
import SignUp from './Pages/SignUp';
import NaviBar from './Navi/NaviBar';
import SignInPage from './Pages/SignInPage';
const theme = createMuiTheme({
  palette:{
    primary:blue,
    secondary:purple
  }
});

class App extends React.Component {
  render(){
    return (
      <div>
        <ThemeProvider theme = {theme}>
          <Router>
            <div>
              {
                <NaviBar/>
              }
              <Switch>
                <Route path = "/">
                  <HomePage/>
                </Route>
                <Route path = "/Resume">
                  <ResumePage/>
                </Route>
                <Route path= "/portfolio">
                  <PortfolioPage/>
                </Route>
                <Route path = "/sign-in">
                  <SignInPage/>
                </Route>
                <Route path = "/sign-up">
                  <SignUp/>
                </Route>
                <Route path = "/contact">
                  <ContactPage/>
                </Route>
              </Switch>
            </div>
          </Router>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
