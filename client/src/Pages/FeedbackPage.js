import React from 'react';
import Axios from 'axios';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import WithAuth from './withAuth';
class FeedbackPage extends React.Component {
    constructor() {
        super();
        this.state = {
            messagesarr: [],
            name: '',
            usermessage:'',
            loggedin: false,
           
        }
        this.loadmessages = this.loadmessages.bind(this);
        this.handleUserMessageChange = this.handleUserMessageChange.bind(this);
        this.handleUserNameChange=this.handleUserNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async componentDidMount(){
        await this.loadmessages();
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
    

    handleUserNameChange(event){
        this.setState({name:event.target.value});
    }
    handleUserMessageChange(event){
        this.setState({usermessage: event.target.value});
    }

  async handleSubmit() {
        const { name, usermessage } = this.state;
        try {

            const data = { name: name, messages: usermessage };

              await Axios.post('/api/messages', data);

        } catch (error) {

            console.error(error.message);
        }

        await this.loadmessages();
    }


    render(){
        const { name, usermessage} = this.state;
        return (
            <div style={{ marginTop: '2rem' }} >
            <Typography component="h1" variant="h5" align='center'>
              Feedback
            </Typography >
                <form align = 'center'>
                <div className="form-group"> 
                <TextField 
                    label={'Name'}
                    value={name}
                    variant="outlined"
                    onChange={this.handleUserNameChange}
                    style={{ margin: '1rem' ,width: '20rem',  }}
                />
                </div>
                <div className="form-group"> 
                <TextField 
                    label={'message'}
                    value={usermessage}
                    variant = "outlined"
                    multiline
                    rows = '3'
                    onChange={this.handleUserMessageChange}
                    style={{ margin: '1rem', width: '25rem'}}
                />
                </div>
                <div style={{ margin: '1rem' }}className="form-group">
                    <Button type = 'submit'
                        onClick={this.handleSubmit} 
                        variant={'contained'}
                        className="btn btn-primary">

                        Submit
                    </Button>
                </div>
                </form>
                <Typography 
                    color={"textSecondary"} 
                    variant={'h4'}
                    style={{ padding: '1rem' }}
                    align = "center">

                    Messages
                </Typography>
                <WithAuth/>
                
            </div>
        );
        
    }
}
export default FeedbackPage;