import React from 'react';
import { Typography, ButtonBase } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }
class PortfolioPage extends React.Component {
    render(){
        return(
            <div style= {{margin : '2rem'}}>
                <div style={{float : "left"}}>
                    <Paper style = {{height:'20rem', width: '20rem', margin:'1rem',marginLeft:'20rem'}}>
                        <Typography align = 'center' style={{lineHeight:'15px'}}>
                            <h2 style= {{fontStyle: 'italic',textDecoration: 'underline'}}>Education</h2>
                            <p><strong>2016-2020</strong></p>
                            <p> UNH</p>
                            <p>Computer Science</p>
                            <p>Bachelors of Science</p>
                            <br></br>
                            <p><strong>2012-2016</strong></p>
                            <p>High School</p>
                        </Typography>
                    </Paper>
                </div>

                <div style={{float : "right"}}>
                    <Paper style = {{height:'20rem', width: '20rem', margin:'1rem',marginRight:'20rem'}}>
                        <Typography align = 'center'>
                            <h2 style= {{fontStyle: 'italic',textDecoration: 'underline'}}>Experience</h2>
                            <p><strong>2018</strong></p>
                            <p>Retail</p>
                            <p><strong>2019-</strong></p>
                            <p>Success  Assistant</p>
                        </Typography>
                        
                    </Paper>
                </div>

                <div style ={{float:'left',clear:'both'}}>
                    <Paper style = {{height:'20rem', width: '20rem',margin:'1rem',marginLeft:'20rem'}}>
                        <Typography align = 'center'>
                            <h2 style= {{fontStyle: 'italic',textDecoration: 'underline'}}>Skills</h2>
                            <Typography style= {{listStyleType: 'circle'}}>
                                <p>C++  ~  Intermediate</p>
                                <p>Python ~ Intermediate</p>
                                <p>Java ~ Beginner</p>
                                <p> SQL ~ Beginner</p>
                                <p>JavaScript ~ Beginner</p>

                            </Typography>
                        </Typography>
                    </Paper> 
                </div>
                <div style = {{float:'right'}}>
                    <Paper style = {{height:'20rem', width: '20rem', margin:'1rem',marginRight:'20rem'}}>
                        <Typography align = 'center'>
                            <h2 style= {{fontStyle: 'italic',textDecoration: 'underline'}}>Contact</h2>
                        </Typography>
                        <List component="nav" aria-label="contact buttons">
                        <ListItemLink href="https://twitter.com/">
                            <ListItem button>
                            <ListItemIcon>
                                <TwitterIcon />
                            </ListItemIcon>
        
                            <ListItemText primary="Twitter" />
                            </ListItem>
                            </ListItemLink>

                            <ListItemLink href="https://github.com/">
                            <ListItem button>
                            <ListItemIcon>
                                <GitHubIcon />
                            </ListItemIcon>
                            <ListItemText primary="Github"  />
                            </ListItem>
                            </ListItemLink>

                            <ListItemLink href="https://Linkedin.com/">
                            <ListItem button>
                            <ListItemIcon>
                             <LinkedInIcon />
                            </ListItemIcon>
                            <ListItemText primary="Linkedin"  />
                            </ListItem>
                            </ListItemLink>

                            <ListItemLink href="https://facebook.com/">
                            <ListItem button >
                                <ListItemIcon>
                                <FacebookIcon />
                            </ListItemIcon>
                            <ListItemText primary="Facebook"/>
                            </ListItem>
                            </ListItemLink>
                        </List>
                    </Paper>
                
                </div>
                <div style={{clear :"both"}}>
                    <Paper style = {{height:'25rem', width: '40rem', margin:'25rem',paddingTop:'0.5rem'}} align= "center">
                        <Typography >
                            <h2 >Heroku Project</h2>
                        </Typography>
                        <List component= "projects">
                        <ListItemLink href="https://dashboard.heroku.com/apps/trportfolio2/">
                        
                            <ListItem button >
                            <ListItemText primary="Heroku Project"/>
                            <img   style={{marginTop: '0rem'}} width = '100%' height = '300rem' src= "https://zimmergren.net/content/images/2016/09/herokulogo.png"/>
                            
                            </ListItem>
                            </ListItemLink>

                        </List>
                    
                    </Paper>
                    
                </div>
            </div>

        )
    }

}
export default PortfolioPage;