import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Axios from 'axios';

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
        return(
        <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Login</h2>
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    name="email"
                    onChange={ this.handleUserEmailAddressChange }
                    value={ this.state.email }
                    />
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    name="password"
                    onChange={ this.handleUserPasswordChange }
                    value={ this.state.password }
                    />
                </div>
                <div className="form-group">
                    <Button type="submit" className="btn btn-primary"
                    onClick = {this.handleSubmit}
                    variant= {'contained'}
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