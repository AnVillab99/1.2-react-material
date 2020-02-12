import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'


export class Login extends React.Component{


    constructor(props) {
        super(props);
        this.state = {email : "", password : ""};
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleEmail(e){
        console.log("email:"+ e.target.value)
        this.setState( {
            
            email : e.target.value
        });
    }

    handlePassword(e){
        console.log("password:"+ e.target.value)
        this.setState({
            password : e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        console.log("email:"+ e.target.value+" saved: "+localStorage.getItem("email"))
        if(localStorage.getItem("email") === this.state.email && localStorage.getItem("password") === this.state.password) {
                localStorage.setItem("isLoggedIn", "true")
                this.props.loginF()
        }else{
            alert("Credenciales erradas")
        }
        
    }

    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input
                                id="email"
                                name="email" 
                                autoComplete="email" 
                                autoFocus 
                                selected={this.state.email}
                                onChange={this.handleEmail}/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    selected={this.state.password}
                                    onChange={this.handlePassword}/>
                                    
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                                onClick={this.handleSubmit}
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

}