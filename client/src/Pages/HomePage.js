import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

var sectionStyle = {
    width: '95.5%',
    height: "40rem",
    backgroundImage: "url("+'https://i2.wp.com/kamratalperiti.org/wp-content/uploads/corporate-buildings-m.jpg?ssl=1' + ")",
    backgroundRepeat: "noRepeat",
    align:'center',
    padding:'2rem'
  };
var paper= {
    margin:'2rem',
    backgroundColor: "lightgray",
  };
class HomePage extends React.Component {
    
    render(){
        return(
            <div style = {{margin : '2rem'}} >
                <div style = {sectionStyle} >
                    <Paper style = {paper}>
                        <Grid container spacing = {3}>
                            <Grid item xs = {8}>
                                <img  width = '350rem' height = '350rem' src= "https://space-facts.com/wp-content/uploads/saturn.png"/>
                            </Grid>                       
                        
                            <Grid item xs={8} >
                                <Paper >xs=6 sm=3</Paper>
                            </Grid>
                        </Grid> 
                    </Paper>
                </div>
            </div>
        )
    }

}
export default HomePage;