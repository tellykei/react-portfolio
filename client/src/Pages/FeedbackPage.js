import React from 'react';
import Axios from 'axios';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
class FeedbackPage extends React.Component {
    constructor() {
        super();
        this.state = {
            messages: [],
            name: '',
            message:''
        }
        this.loadmessages = this.loadmessages.bind(this);
        this.handleUserMessageChange = this.handleUserMessageChange.bind(this);
        this.handleUserNameChange=this.handleUserNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async componentDidMount(){
        await this.loadmessages()
    }

    async loadmessages() {
        try {
            const response = await Axios.get('/api/messages');
            const { data } = response;
            this.setState({ messages: data });

        } catch (error) {

            console.error(error.message);
        }
    }

    handleUserNameChange(event){
        this.setState({name:event.target.value});
    }
    handleUserMessageChange(event){
        this.setState({message: event.target.value});
    }

  async handleSubmit(e) {
        const { name, message } = this.state;
        try {

            const data = { name: name, message: message };

              await Axios.post('/messages', data);

        } catch (error) {

            console.error(error.message);
        }

        await this.loadmessages();
    }

    render(){
        
        const { messages, name, message } = this.state;

        // For each user in the database, create a card
        const messagess = messages.map((messages) => {

            return (
                <Card style={{ margin: '1rem' }} key={JSON.stringify(message)}>
                    <CardContent>
                        <Typography color={"textSecondary"}>
                            { message.name }
                        </Typography>
                        
                        <Typography color={"textSecondary"}>
                            { message.message }
                        </Typography>
                    </CardContent>
                </Card>
            )
        });

        return (
            <div style={{ margin: '1rem' }} >
            <Typography component="h1" variant="h5" align='center'>
              Feedback
            </Typography >
                <form align = 'center'>
                <div>
                <TextField 
                    label={'Name'}
                    value={name}
                    variant="outlined"
                    onChange={this.handleUserNameChange}
                    align= 'center'
                    style={{ margin: '1rem' ,width: '20rem',  }}
                />
                </div>
                <div>
                <TextField 
                    label={'message'}
                    value={message}
                    variant = "outlined"
                    multiline
                    rows = '3'
                    onChange={this.handleUserMessageChange}
                    style={{ margin: '1rem', width: '20rem'}}
                />
                </div>
                <div style={{ margin: '1rem' }}>
                    <Button 
                        onClick={this.handleUserSubmit} 
                        variant={'contained'}>

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

                { messagess }
            </div>
        );
    }
}
export default FeedbackPage;