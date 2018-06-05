import React, { Component } from 'react';
// import LoginBtn from './components/LoginBtn'
// import SignupBtn from './components/SignupBtn' 
import { Link, withRouter } from 'react-router-dom';
// import styleButton from '../CSS/style.js';
import {Button, Title, Background} from '../CSS/style.js';

class HomePage extends Component {
    constructor(props){
        super(props);
        console.log(props);

    }

    handleClick = (event) => {
        this.props.history.push('/login');
}
handleClick1 = (event) => {
    this.props.history.push('/signup' );
}
    // handleClick = (event) => {
    //     this.props.history.push('/signup');
    // }

    render() {
        return (
            <div >
        <Background>
        
           <Title>
              Welocme  <br/>
Select Login or Signup to continue
           </Title>

            <h3>
             <Button id="loginBtn" onClick={this.handleClick} >
                Login 
             </Button> <br/>
             <Button id="signupBtn" onClick={this.handleClick1} >
                 Signup
             </Button>
            </h3>
        </Background>
        </div>
           
        );
    }
}

export default withRouter(HomePage);