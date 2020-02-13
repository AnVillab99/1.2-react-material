import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from "./components/TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Login} from "./components/Login"
import {TodoApp} from "./components/TodoApp"
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
        localStorage.setItem("email","test@mail.com");
        localStorage.setItem("password","admin");
        if(! localStorage.getItem("isLoggedIn")){
            localStorage.setItem("isLoggedIn",false);
        }
        this.loginF = this.loginF.bind(this);
        
    }

    loginF() {
        console.log("entro a log de app")
        this.setState({isLoggedIn : true});
        localStorage.setItem("isLoggedIn","true")
        
    }


    render() {
        const LoginView = () => (<Login loginF = { this.loginF }/>);
        const TodoAppView = () => (<TodoApp/>);
        const logged = ( localStorage.getItem("isLoggedIn") );//dqwdwqdwqdqwdqwdqwd
        let check ;
        if(!(logged)) {
            console.log("not logged");
            check = (
                <div>
                    <ul >
                        <li><Link to="/">Login</Link></li>
                    </ul>
                    <div>
                        <Route exact path="/" component={LoginView}/>
                    </div>
                </div>
            );
        } 
        else {
            console.log(" is logged")            
            check = (
                <div>
                    <ul >
                        <li><Link to="/todo">Todo</Link></li>
                    </ul>
                    <div>
                        <Route exact path="/todo" component={TodoAppView}/>
                    </div>
                </div>
            );
        }
    

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>
                    <div>{check}</div>
                </div>
            </Router>
        );
    }


}

export default App;
