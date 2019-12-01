import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import{blue, purple} from "@material-ui/core/colors";
import HomePage from './Pages/HomePage';
import ResumePage from './Pages/ResumePage';
import PortfolioPage from './Pages/PortfoliPage';
import FeedbackPage from './Pages/FeedbackPage';
import SignUp from './Pages/SignUp';
import NaviBar from './Navi/NaviBar';
import SignInPage from './Pages/SignInPage';
import { Provider } from "react-redux";
import store from "./store";
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
        <Provider store={store}> 
          <Router>
            <div>
              {
                <NaviBar/>
              }
              <Switch>
              <Route path = "/Resume">
                  <ResumePage/>
                </Route>
                
                
                <Route path= "/projects">
                  <PortfolioPage/>
                </Route>
                <Route path = "/signin">
                  <SignInPage/>
                </Route>
                <Route path = "/signup">
                  <SignUp/>
                </Route>
                <Route path = "/feedback">
                  <FeedbackPage/>
                </Route>
                <Route path = "/">
                  <HomePage/>
                </Route>
              </Switch>
            </div>
          </Router>
          </Provider>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
