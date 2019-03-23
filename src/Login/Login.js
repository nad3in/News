import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'
import './Login.css';

class  Login extends Component {
  render() {
    return (
      <div>
            <h2>Login</h2>
        <InputGroup className="input">
        <InputGroupAddon addonType="prepend"> User Name</InputGroupAddon>
        <Input name="username" placeholder="username" onChange={this.props.onChange}/>
      </InputGroup>
      <InputGroup className="input">
        <InputGroupAddon addonType="prepend">Password</InputGroupAddon>
        <Input  type="password"  name="password" id="examplePassword"placeholder="Password"onChange={this.props.onChange} />
      </InputGroup>
      <Button color="primary" onClick={this.props.login}>Submit</Button>
      </div>
    );
  }
}

export default Login;
