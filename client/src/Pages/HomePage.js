import React from 'react';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

var sectionStyle = {
    width: '76rem',
    height: "37.5rem",
    backgroundImage: "url("+'https://i2.wp.com/kamratalperiti.org/wp-content/uploads/corporate-buildings-m.jpg?ssl=1' + ")",
    clear:'both',

    float:'left',
    display: 'inline-block',
  position: 'absolute'

  };

class HomePage extends React.Component {
    
    render(){
        return(
            <div style = {{margin : '2rem', backgroundColor:"blue", position: 'relative',minWidth: '250px'}} >
                
                    
                       
                        <div style = {sectionStyle}>
                            
                    <Typography   align='left' style={{marginTop : '15rem',fontSize:"50px",marginLeft:'15rem',fontStyle: "italic",lineHeight:'40px',color:"darkblue",textShadow: "1px 1px white" }}>
                       <p> Hello, I'm</p> 
                            <h1>Taliyah</h1>
                        <p>Welcome</p>
                    </Typography>
                    </div>
                            <div style={{float: 'right', width:'15rem'}} >
                            <Paper style={{backgroundColor : '#42a5f5', height:'37.5rem' }}align = "center">
                                <img   width = '200rem' height = '200rem' src= "https://images.vexels.com/media/users/3/152609/isolated/preview/deea3e2e5e2347c0eeb98a8f65185ded-saturn-planet-icon-by-vexels.png"/>
                            
                                
                                    <Typography align = 'center' >
                                        <h2 style={{color:"darkblue", size:'10px'}}>Taliyah </h2>
                                        <p>Computer Science Student</p>
                                       
                                        <p> UNH</p>
                                        <p> Class of 2020</p>
                                        <h2 style={{color:"darkblue", size:'10px'}}>Bio</h2>
                                        <p style= {{marginTop:'2rem'}}>Hello, welcome to my portfolio. Contact information is 
                                            on the portfolio page</p>
                                        
                                    </Typography>
                                    </Paper>
                                    </div>
                  
                   
               
            </div>
        )
    }

}
export default HomePage;