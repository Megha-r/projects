import React, { Component } from 'react';
import formStyling from '../CSS/formStyling.css';
import { withRouter } from 'react-router-dom';
import {Button, Title, Background, Input} from '../CSS/style.js';


export default class LoginPage extends Component {
        constructor(props) {
        super(props);
        console.log(props);
        this.state = {value: '' };
        // this.handleClick  = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // handleClick(event)
    // {
    //     // event.preventDefault();
    //    this.props.history.push('/login');
    // }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Submit Clicked' + this.state.value);
        event.preventDefault();
    }

    render() {
        console.log('login');
        return (
            <Background>
            <form onSubmit={this.handleSubmit}>
              <Title> Login Page </Title>
            
                <div  id="email">
                  
          <Input type="text" value={this.state.valueEmail} onChange={this.handleChange} placeholder="Enter your Email" />
                 
                </div>  <br/>

                <div id="pass">
                  
          <Input type="text" value={this.state.valuePassword} onChange={this.handleChange} placeholder="Enter your Password" />
                
                </div>  <br/>

                 <br/>
                <div  id = "submit">
                <Button id="submitBtn" type="submit" value="Login">
                Login
                </Button>
                </div>
            </form>
            </Background>
        );
    }
}

