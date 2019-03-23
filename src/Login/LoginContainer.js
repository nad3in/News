import React, { Component } from 'react';
import Login from './Login';
import { Redirect } from 'react-router'


class LoginContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
         username:"",password:"",
         authenticated:false
        }
      }
      onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
      }
      isValidUser(){
        if(this.props.user.username===this.state.username&&this.props.user.password===this.state.password){
           this.props.login();
           this.authantcated()
           localStorage.setItem('logedin', true);
          
        }
        else{
             alert("invalid login");
        }
     
    }
    authantcated(){
      this.setState({authenticated:true});
    }
    componentDidMount(){
      var logedin=localStorage.getItem('logedin');
      if(logedin===true){
          this.authantcated();
      }
    }
  render() {
    return (
      <div>
          {this.state.authenticated && 
            <Redirect to='/home'/>} 
          {
            <Login 
                onChange={this.onChange} 
                login={this.isValidUser.bind(this)}
            />
         }
       
        
      </div>
    );
  }
}

export default LoginContainer;
