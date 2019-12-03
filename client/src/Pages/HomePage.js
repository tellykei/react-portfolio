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
    backgroundColor: "lightblue",
    textAlign: 'center',
    height: '35rem'
  };
class HomePage extends React.Component {
    
    render(){
        return(
            <div style = {{margin : '2rem'}} >
                <div style = {sectionStyle} >
                    <Typography component="h1"  align='center'>
                       <h1> Welcome</h1>
                    </Typography>
                    <Paper style = {paper}>
                        <Grid container spacing = {3}>
                            <Grid item xs = {4} >
                                <img   style = {{margin: '2rem', marginLeft : '8rem'}} width = '350rem' height = '350rem' src= "https://space-facts.com/wp-content/uploads/saturn.png"/>
                            </Grid>                       
                        
                            <Grid item xs={6} >
                                <Paper style={{backgroundColor : 'powderblue', margin: '2rem',marginLeft:'10rem', height:'25rem' }}>
                                    <Typography >
                                        <h2>Taliyah </h2>
                                        <p>Computer Science</p>
                                        <p>UNH</p>
                                        <p>Class of 2020</p>
                                        <p style= {{marginTop:'2rem'}}>Hello, welcome to my portfolio. Contact information is 
                                            on the portfolio page</p>
                                        
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid> 
                    </Paper>
                </div>
            </div>
        )
    }

}
export default HomePage;