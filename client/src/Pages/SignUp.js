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

            const data = { name: username, email: userEmailAddress, password: userPassword };

              await Axios.post('/api/users', data);
              alert(`sign in successful`);

        } catch (error) {

            console.error(error.message);
            alert(`signup failed`);
        }

        await this.loadUsers();
    }
    render() {
        
        const { users, userName, userEmailAddress, userPassword } = this.state;
   

        return (
            <div className="container" style={{marginTop: '5rem', width : "100%"}}>
            <Typography component="h1" variant="h5" align='center'>
              Create a new account
            </Typography >
        
                <form align='center'>
                <div className="form-group"style={{align:'center'}} >
                <TextField 
                    type = "name"
                    placeholder= "Name"
                    label={'Name'}
                    value={userName}
                    onChange={this.handleUserNameChange}
                    variant = "outlined"
                    style={{ margin: '2rem', width: "40rem" }}
                    required
                />
                </div>
                <div>
                <TextField
                    
                    type= "Email"
                    placeholder="Email Address"
                    label={'Email Address'}
                    value={userEmailAddress}
                    onChange={this.handleUserEmailAddressChange}
                    style={{ margin: '2rem', width: "40rem" }}
                    variant = "outlined"
                    required
                />
                </div>
                <div >
                <TextField
                    type = "password"
                    placeholder = "password"
                    label='Password'
                    variant = "outlined"
                    value={userPassword}
                    onChange={this.handleUserPasswordChange}
                    style={{ margin: '2rem', width: "40rem" }}
                    
                    required
                />
                </div>

                <div>
                    <Button type="submit" className="btn btn-primary"
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