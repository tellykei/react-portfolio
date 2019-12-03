import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

var sectionStyle = {
    width: '100%',
    height: "42rem",
    backgroundImage: "url("+'https://i2.wp.com/kamratalperiti.org/wp-content/uploads/corporate-buildings-m.jpg?ssl=1' + ")",
    backgroundRepeat: "noRepeat",
    
  };
class HomePage extends React.Component {
    
    render(){
        return(
            <div style = {{margin : '2rem'}} >
                <div style = {sectionStyle}>
                    <Grid container spacing = {4} 
                    >
                        <Grid item xs = {12}>
                            <img  margin = '5rem' width = '400rem' height = '400rem' src= "https://space-facts.com/wp-content/uploads/saturn.png"/>
                        </Grid>                        

                   
            
                        <Grid item xs={8} sm container>
                        <Paper >xs=6 sm=3</Paper>
                        </Grid>
                    </Grid> 
                </div>
            </div>

        )
    }

}
export default HomePage;