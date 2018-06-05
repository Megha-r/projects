import React, { Component } from 'react';
import formStyling from '../CSS/formStyling.css';
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
        const u_name = this.name.state.value;
        this.setState({
            u_name: event.target.value,

        });
    }

    handleEmail = (event) => {

        this.setState({

            u_email: event.target.value,

        });
    }
    handlePassword = (event) => {
        const password = this.password.state.value;
        this.setState({

            u_password: event.target.value,

        });
    }
    handleCpass = (event) => {
        const u_cpass = this.cpass.state.value;
        this.setState({
            u_cpass: event.target.value
        });
    }



    handleSubmit = (event) => {
        // alert('Submit Clicked' + this.state.value);
        event.preventDefault();

        if( (!(this.state.u_name && this.state.u_email && this.state.u_password) == "") && (this.state.u_password === this.state.u_cpass)) 
        {
            console.log("condition true !!!!!!")
            fetch(this.props.action, {
                headers: {
                    'Accept': 'application/json',
                    'content-type': 'application/json',
                },
                method: 'post',
                mode: 'no-cors',
                body: JSON.stringify({ data: this.state })
            });
            console.log("------------- BODY DATA ---------", this.state);

        }
        else {
            alert('FILL ALL FIELDS AND CONFIRM PASS MUST MATCH WITH PASSWORD');

            console.log("---------------FILL ALL FIELDS AND CONFIRM PASS MUST MATCH WITH PASSWORD--------------");
        }
    }

    

  render() {
        console.log('dataBeforeRendering---->>>>.', this.state);
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
