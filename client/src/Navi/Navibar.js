import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter } from "react-router-dom";
import CommentIcon from '@material-ui/icons/Comment';
import HomeIcon from '@material-ui/icons/Home';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';


class NaviBar extends React.Component {
    constructor(props){
        super(props);
        this.handleHomePageNavi = this.handleHomePageNavi.bind(this);
        this.handleProjectPageNavi = this.handleProjectPageNavi.bind(this);
        this.handleSignInPageNavi = this.handleSignInPageNavi.bind(this);
        this.handlefeedbackPageNavi = this.handlefeedbackPageNavi.bind(this);
        this.handleSignUpPageNavi=this.handleSignUpPageNavi.bind(this);
    }
    handleHomePageNavi(){
        const {history} = this.props;
        history.push("/");
    }
    handleProjectPageNavi(){
        const {history} = this.props;
        history.push("/projects");
    }
    handleSignInPageNavi(){
        const {history} = this.props;
        history.push("/signin");
    }
    handlefeedbackPageNavi(){
        const {history} = this.props;
        history.push("/feedback");
    }
    handleSignUpPageNavi(){
        const {history} = this.props;
        history.push("/signup");
    }

    render(){
            return(
                <div >
                    <AppBar position = "static" >
                        <Toolbar >
                            <IconButton edge = "start" color = "inherit" aria-label = "menu">
                                <MenuIcon/>
                            </IconButton>
                            <span style ={{marginLeft: "25rem"}}>
                            <Button color = {"inherit"}
                            align = "center"
                            startIcon = {<HomeIcon/>}
                            onClick = {this.handleHomePageNavi}>
                                Home
                            </Button>

                            <Button color = {"inherit"}
                            startIcon={<FolderSharedIcon/>}
                            onClick = {this.handleProjectPageNavi}>
                                Portfolio
                            
                            </Button>
                            <Button
                            showLabels
                            color = {'inherit'}
                            startIcon={< CommentIcon/>  }
                            onClick= {this.handlefeedbackPageNavi}
                            >
                                FeedBack
                            </Button>
                            <Button color = {"inherit"}
                            startIcon={<PersonIcon/>}
                            onClick = {this.handleSignInPageNavi}>
                                Login
                            </Button>
                            <Button color = {"inherit"}
                            startIcon = {<PersonAddIcon/>}
                            onClick = {this.handleSignUpPageNavi}>
                                Sign Up
                            </Button>
                            </span>
                        </Toolbar>
                    </AppBar>
                </div>
            );
        }
}
export default withRouter(NaviBar);