import React from 'react';
import Button from "@material-ui/core/Button";
import Axios from 'axios';
import { TextField } from '@material-ui/core';

class SignInPage extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            userEmailAddress: '',
            userPassword:''
        }
        this.loadUsers = this.loadUsers.bind(this);
        this.handleUserEmailAddressChange = this.handleUserEmailAddressChange.bind(this);
        this.handleUserPasswordChange = this.handleUserPasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleUserEmailAddressChange(event){
        this.setState({userEmailAddress: event.target.value});
    }
    handleUserPasswordChange(event){
        this.setState({userPassword: event.target.value});
    }

  async handleSubmit(e) {
        const { userEmailAddress, userPassword } = this.state;
        try {

            const data = { email: userEmailAddress, password: userPassword };

              await Axios.post('/sessions', data);

        } catch (error) {

            console.error(error.message);
        }

        await this.loadUsers();
    }
    render() {
        const { userEmailAddress, userPassword } = this.state;
        return(
        <div align = "center"  style={{ marginTop: '50px'}} >
            <h2 style={{marginBottom: '40px'}}>Login</h2>
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <TextField
                    type="Email"
                    placeholder="Email"
                    name="Email"
                    variant = "outlined"
                    onChange={ this.handleUserEmailAddressChange }
                    value={userEmailAddress}
                    style={{  margin: '2rem', width: "20rem" }}
                    />
                </div>
                <div className="form-group">
                    <TextField
                    type="password"
                    placeholder="Password"
                    name="password"
                    variant = "outlined"
                    onChange={ this.handleUserPasswordChange }
                    value={ userPassword }
                    style={{  margin: '2rem', width: "20rem" }}
                    />
                </div>
                <div className="form-group">
                    <Button type="submit" className="btn btn-primary"
                    onClick = {this.handleSubmit}
                    variant= {'contained'}
                    color = 'blue'
                    >
                        Login User
                    </Button>
                </div>
            </form>
        </div>
        )
    }
}
  
export default SignInPage;