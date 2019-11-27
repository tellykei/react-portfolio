import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import{blue, purple} from "@material-ui/core/colors";
import HomePage from '../../../../assign2/assignmenttwo/bookface/src/components/HomePage';
import ResumePage from './Pages/ResumePage';
import PortfolioPage from './Pages/PortfoliPage';
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
                  <ContactMe/>
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
