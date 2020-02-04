import React, {Component} from 'react';

import {TodoList} from "./TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


export class TodoApp extends Component{


    constructor(props) {
        super(props);
        this.state = {items: [], text: '', priority: 0, dueDate:""};
        this.handleChange = this.handleChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        return(
        <div className="App">
        <header className="App-header">
            
            <h1 className="App-title">TODO React App</h1>
        </header>

        <br/>
        <br/>
        <br/>
        <br/>
        <form onSubmit={this.handleSubmit} className="todo-form">
            <h3>New TODO</h3>

            <TextField
            id="text"
            label="Text:"
            type="text"
            name="text"
            margin="normal"
            variant="outlined"
            selected={this.state.text}
            onChange={this.handleChange}></TextField>
            

            <br/>
            <br/>

            <TextField
            id="priority"
            label="Priority:"
            type="text"
            name="priority"
            margin="normal"
            variant="outlined"
            selected={this.state.priority}
            onChange={this.handlePriorityChange}/>
            
            
            <br/>
            <br/>

            <TextField
            id="date"
            label="dueDate"
            type="date"
            name="dueDate"
            className="dueDate"
            selected={this.state.dueDate}
            onChange={this.handleDateChange}
            InputLabelProps={{
            shrink: true,
            }}
            />

            
            
            <br/>
            <br/>

            <br/>

            <Button variant="outlined" color="primary" onClick={this.handleSubmit}>
                Add #{this.state.items.length + 1}
            </Button>
        </form>
        <br/>
        <br/>
        <TodoList todoList={this.state.items}/>
    </div>
    );
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {
        console.log("wdfefwef")

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: new Date(this.state.dueDate).toString('dddd, MMMM ,yyyy')

        };
        console.log(this.state.dueDate)
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }

}