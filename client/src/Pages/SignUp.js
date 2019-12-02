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

            const data = { name: username, email: userEmailAddress, password: userPassword };

              await Axios.post('/api/users', data);

        } catch (error) {

            console.error(error.message);
        }

        await this.loadUsers();
    }
    render() {
        const { users, userName, userEmailAddress, userPassword } = this.state;
        
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
                    </CardContent>
                </Card>
            )
        });

        return (
            <div className="container" style={{ marginTop: '5rem'}} align= "center">
            <Typography component="h1" variant="h5">
              Create a new account
            </Typography >
                <form>
                <div className="form-group">
                <TextField 
                    type = "name"
                    placeholder= "Name"
                    label={'Name'}
                    value={userName}
                    onChange={this.handleUserNameChange}
                    variant = "outlined"
                    
                    required
                />
                </div>

                <TextField
                    type= "email"
                    placeholder= "Email"
                    label='Email Address'
                    variant = "outlined"
                    value={userEmailAddress}
                    onChange={this.handleUserEmailAddressChange}
                    required
                />
                <div className="form-group">
                <TextField
                    type = "password"
                    placeholder = "password"
                    label='Password'
                    variant = "outlined"
                    value={userPassword}
                    onChange={this.handleUserPasswordChange}
                    style={{ margin: '1rem' }}
                    required
                />
                </div>

                <div className="form-group">
                    <Button type="submit" className="btn btn-primary"
                        onClick={this.handleUserSubmit} 
                        variant={'contained'}>
                        Submit
                    </Button>
                </div>
                </form>
                {userCards}
            </div>
        );
    }

}
export default SignUp;