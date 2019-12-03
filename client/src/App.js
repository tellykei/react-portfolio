import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import{blue, purple} from "@material-ui/core/colors";
import HomePage from './Pages/HomePage';
import PortfolioPage from './Pages/PortfoliPage';
import FeedbackPage from './Pages/FeedbackPage';
import SignUp from './Pages/SignUp';
import NaviBar from './Navi/NaviBar';
import SignInPage from './Pages/SignInPage';
import withAuth from './Pages/withAuth';

//import withAuth from './Pages/withAuth';
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
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
