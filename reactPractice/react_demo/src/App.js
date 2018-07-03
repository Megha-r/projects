import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignupPage from './pages/registrationForm';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
constructor(props, context)
{
  super(props, context);
  this.state = { description: '' };
    
}
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
