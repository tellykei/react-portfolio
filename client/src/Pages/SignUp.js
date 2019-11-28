import React from 'react';
import Axios from 'axios';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            users: [],
            username: '',
            userEmailAddress: '',
            userPassword:''
        };
        this.loadUsers = this.loadUsers.bind(this);
        this.handleUserEmailAddressChange = this.handleUserEmailAddressChange.bind(this);
        this.handleUserNameChange=this.handleUserNameChange.bind(this);
        this.handleUserPasswordChange = this.handleUserPasswordChange.bind(this);
        this.handleUserSubmit = this.handleUserSubmit.bind(this);
    }
    async componentDidMount(){
        await this.loadUsers()
    }
    async loadUsers() {

        try {

            const response = await Axios.get('/api/users');

            const { data } = response;

            this.setState({ users: data });

        } catch (error) {

            console.error(error.message);
        }
    }
    handleUserNameChange(event){
        this.setState({username:event.target.value});
    }
    handleUserEmailAddressChange(event){
        this.setState({userEmailAddress: event.target.value});
    }
    handleUserPasswordChange(event){
        this.setState({userPassword: event.target.value});
    }
    async handleUserSubmit() {

        const { username, userEmailAddress, userPassword } = this.state;

        try {

            // This is the JSON payload that will be delivered to the server in 'request.body'
            const data = { name: username, emailAddress: userEmailAddress, password: userPassword };

            // We are now doing a POST request because we are storing a new user
            await Axios.post('/api/users', data);

        } catch (error) {

            console.error(error.message);
        }

        // Reload the users straight from the server
        await this.loadUsers();
    }
    render() {

        const { users, userName, userEmailAddress, userPassword } = this.state;

        // For each user in the database, create a card
        const userCards = users.map((user) => {

            return (
                <Card style={{ margin: '1rem' }} key={JSON.stringify(user)}>
                    <CardContent>
                        <Typography color={"textSecondary"}>
                            { user.name }
                        </Typography>
                        
                        <Typography color={"textSecondary"}>
                            { user.emailAddress }
                        </Typography>
                        <Typography color={"textSecondary"}>
                            { user.password }
                        </Typography>
                    </CardContent>
                </Card>
            )
        });

        return (

            <div style={{ margin: '1rem' }}>

                <TextField 
                    label={'Name'}
                    value={userName}
                    onChange={this.handleUserNameChange}
                    style={{ margin: '1rem' }}
                />

                <TextField 
                    label={'Email Address'}
                    value={userEmailAddress}
                    onChange={this.handleUserEmailAddressChange}
                    style={{ margin: '1rem' }}
                />
                <TextField 
                    label={'Password'}
                    value={userPassword}
                    onChange={this.handleUserPasswordChange}
                    style={{ margin: '1rem' }}
                />

                <div style={{ margin: '1rem' }}>
                    <Button 
                        onClick={this.handleUserSubmit} 
                        variant={'contained'}>

                        Submit
                    </Button>
                </div>

                <Typography 
                    color={"textSecondary"} 
                    variant={'h4'}
                    style={{ padding: '1rem' }}>

                    Users
                </Typography>

                { userCards }
            </div>
        );
    }

}
export default SignUp;