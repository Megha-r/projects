
import React from 'react';
import {expect, it, describe } from 'jest';
import { shallow, mount, render } from 'enzyme';
import Login from '../LoginPage';

// describe what we are testing
describe('Login Component', () => {
 
    // make our assertion and what we expect to happen 
    it('should render without throwing an error', () => {
      expect(shallow(<Login />).find('form.login').exists()).toBe(true);
    });
    it('renders a email input', () => {
        expect(shallow(<Login />).find('#emailInput').length).toEqual(1);
       });
      it('renders a password input', () => {
        expect(shallow(<Login />).find('#passwordInput').length).toEqual(1);
       });
  
   describe('Email input', () => {
  
    it('should respond to change event and change the state of the Login Component', () => {
     
     const wrapper = shallow(<Login />);
     wrapper.find('#emailInput').simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}});
     
    expect(wrapper.state('email')).toEqual('blah@gmail.com');
    });
   });
   
   describe('Password input', () => {
    
    it('should respond to change event and change the state of the Login Component', () => {
     
     const wrapper = shallow(<Login />);
     wrapper.find('#passwordInput').simulate('change', {target: {name: 'password', value: 'cats'}});
     
     expect(wrapper.state('password')).toEqual('cats');
    });
   });
});
