import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter } from "react-router-dom";

class NaviBar extends React.Component {
    constructor(props){
        super(props);
        this.handleHomePageNavi = this.handleHomePageNavi.bind(this);
        this.handleResumePageNavi = this.handleResumePageNavi.bind(this);
        this.handleProjectPageNavi = this.handleProjectPageNavi.bind(this);
        this.handleSignInPageNavi = this.handleSignInPageNavi.bind(this);
        this.handleContactPageNavi = this.handleContactPageNavi.bind(this);
    }
    handleHomePageNavi(){
        const {history} = this.props;
        history.push("/");
    }
    handleResumePageNavi(){
        const {history} = this.props;
        history.push("/");
    }
    handleProjectPageNavi(){
        const {history} = this.props;
        history.push("/");
    }
    handleSignInPageNavi(){
        const {history} = this.props;
        history.push("/");
    }
    handleContactPageNavi(){
        const {history} = this.props;
        history.push("/");
    }

    render(){
        const loggedin = false;
        if(!loggedin){
            return(
                <div>
                    <AppBar position = "static">
                        <Toolbar>
                            <IconButton edge = "start" color = "inherit" aria-label = "menu">
                                <MenuIcon/>
                            </IconButton>
                            <Button color = {"inherit"}
                            onClick = {this.handleHomePageNavi}>
                                Home
                            </Button>
                            <Button color = {"inherit"}
                            onClick = {this.handleResumePageNavi}>
                                Resume
                            </Button>

                            <Button color = {"inherit"}
                            onClick = {this.handleProjectPageNavi}>
                                Portfolio
                            </Button>

                        {/* <Button color = {"inherit"}
                            onClick = {this.handleContactPageNavi}>
                                Contact Me
                            </Button>*/}
                            <Button color = {"inherit"}
                            onClick = {this.handleSignInPageNavi}>
                                Sign-in
                            </Button>

                        </Toolbar>
                    </AppBar>
                </div>
            );
        }
        else{
            return(
                <div>
                    <AppBar position = "static">
                        <Toolbar>
                            <IconButton edge = "start" color = "inherit" aria-label = "menu">
                                <MenuIcon/>
                            </IconButton>
                            <Button color = {"inherit"}
                            onClick = {this.handleHomePageNavi}>
                                Home
                            </Button>

                            <Button color = {"inherit"}
                            onClick = {this.handleResumePageNavi}>
                                Resume Me
                            </Button>

                            <Button color = {"inherit"}
                            onClick = {this.handleProjectPageNavi}>
                                Portfolio
                            </Button>

                             <Button color = {"inherit"}
                            onClick = {this.handleContactPageNavi}>
                                Contact Me
                            </Button>

                            <Button color = {"inherit"}
                            onClick = {this.handleSignInPageNavi}>
                                Sign-in
                            </Button>

                        </Toolbar>
                    </AppBar>
                </div>
            );
        }
    }
}
export default NaviBar;