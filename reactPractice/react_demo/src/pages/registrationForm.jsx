import React, { Component } from 'react';
import formStyling from '../CSS/formStyling.css';
//import fetch from 'fetch';
import { Button, Title, Background, Input } from '../CSS/style.js';
//import {textbox} from '../components/textbox'

export default class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        //this.state = {value: '' };
        this.state = {
            data: {
                u_name: '',
                u_email: '',
                u_password: '',
                u_cpass: ''
            }
        };
    }


    handleName = (event) => {
        this.setState({
            u_name : event.target.value,

        });
    }

    handleEmail = (event) => {
        this.setState({
              u_email: event.target.value,

        });
    }
    handlePassword = (event) => {
        this.setState({

            u_password: event.target.value,

        });
    }
    handleCpass = (event) => {
        this.setState({
            u_cpass: event.target.value
        });
    }



    handleSubmit = async(event) => {
        // alert('Submit Clicked' + this.state.value);
        event.preventDefault();
        const info = {
            // [
            u_name : this.state.u_name,
            u_email : this.state.u_email,
            u_password : this.state.u_password,
            u_cpass: this.state.u_cpass
        }
        // ];
        console.log("D A T A--------------------------------", JSON.stringify(info))
        if( (!(this.state.u_name && this.state.u_email && this.state.u_password) == "") && (this.state.u_password === this.state.u_cpass)) 
        {
            console.log("condition true !!!!!!")
            fetch('http://localhost:3002/api/register', {
                method: 'POST',
                headers: {
                "Content-Type": "application/json"
                },
                // mode: 'no-cors',                
                
                body: JSON.stringify(info),
                
            }).then(
                function(response) {
                    console.log(response)
                  if (response.status !== 200) {
                    console.log('------ problem----- Status Code: ' +
                      response.status);
                    return;
                  }
            
                  // Examine the text in the response
                  response.json().then(function(data) {
                    console.log(data);
                  });
                }
              )
              .catch(function(err) {
                console.log('Fetch Error :-S', err);
              });
        }
        else {
            alert('FILL ALL FIELDS AND CONFIRM PASS MUST MATCH WITH PASSWORD');

            console.log("---------------FILL ALL FIELDS AND CONFIRM PASS MUST MATCH WITH PASSWORD--------------");
        }
    }

    

  render() {
        return (
            <Background>
                <form onSubmit={this.handleSubmit}>

                    <Title> Signup Page </Title>
                    <div id="name">


                        <Input type="text" ref={u_name => this.name = u_name} onChange={this.handleName} placeholder="Enter your Name" />

                    </div> <br />

                    <div id="email">

                        <Input type="text" ref={u_email => this.email = u_email} onChange={this.handleEmail} placeholder="Enter your Email" />

                    </div>  <br />

                    <div id="pass">

                        <Input type="text" ref={u_password => this.password = u_password} onChange={this.handlePassword} placeholder="Enter your Password" />

                    </div>  <br />

                    <div id="cpass">

                        <Input type="text" ref={u_cpass => this.cpass = u_cpass} onChange={this.handleCpass} placeholder="Confirm password:" /> <br /> <br />

                    </div>  <br />
                    <div id="submit">
                        <Button id="submitBtn" type="submit" value="SUBMIT">
                            Signup
                   </Button>
                    </div>
                </form>
            </Background>

        );
    }
}

RegistrationForm.defaultProps = {
    action: 'http://localhost:3002/api/register',
    method: 'post'
};
