import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Axios from 'axios';
import Typography from '@material-ui/core/Typography';
class WithAuth extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        
        messagesarr:[]
      };
      this.loadmessages = this.loadmessages.bind(this);
      this.handleDelete=this.handleDelete.bind(this);
    }
      async componentDidMount(){
   
        
        await this.loadmessages();
        
      //  await this.loadmessageid();

    }

    async loadmessages() {
        
        try {
            const response = await Axios.get('/api/messages');
           
            
            const { data } = response;
            this.setState({ messagesarr: data });
        } catch (error) {

            console.error(error.message);
        }
    }
  handleDelete= userId => {
    const requestOptions = {
      method: 'DELETE'
    };
    fetch("/api/messages/" + userId, requestOptions).then((response) => {
      return response.json();
    }).then((result) => {
     "deleting message"
    });
  }
  
    render() {
      const{messagesarr}= this.state
      return this.state.messagesarr.map((message) => {
                
        return (
            <Card style={{ margin: '2rem' ,marginLeft: '10rem' ,marginRight:'10rem'}} key={message._id}>
                <CardContent>
                    <Typography color={"textSecondary"}>
                      Name: &nbsp;
                        { message.name }
                    </Typography>
                    
                    <Typography color={"textSecondary"}>
                      Message: &nbsp;
                        { message.messages }
                    </Typography>
                    <Button style= {{color:'red'}}
                    onClick ={() => { this.handleDelete(message._id) }} 
                    className="delete-btn">Delete</Button>
                </CardContent>
            </Card>
        )
    });
      
    }
  }
export default WithAuth;