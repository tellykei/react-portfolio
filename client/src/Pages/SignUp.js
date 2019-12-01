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
            userPassword:'',
            errors:{}
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

            const data = { name: username, emailAddress: userEmailAddress, password: userPassword };

              await Axios.post('/api/users', data);

        } catch (error) {

            console.error(error.message);
        }

        await this.loadUsers();
    }
    render() {
        const{errors}= this.state;
        const { users, userName, userEmailAddress, userPassword } = this.state;
        return (

            <div style={{ margin: '1rem' }}>
            <Typography component="h1" variant="h5">
              Create a new account
            </Typography>
                <form>
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
                    error = {errors.email}
                />
                <TextField 
                    type = "password"
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
                </form>
            </div>
        );
    }

}
export default SignUp;