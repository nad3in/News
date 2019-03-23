import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'
import './form.css'
class Form extends Component {

  render() {
    return (
       <div>
    <h2>Custom Article</h2>
    <InputGroup className="input form title">
    <InputGroupAddon addonType="prepend">Title</InputGroupAddon>
    <Input name="title" placeholder="Title" onChange={this.props.onChange} value={this.props.state.title}/>
  </InputGroup>
  <InputGroup className="input form description">
    <InputGroupAddon addonType="prepend">Description</InputGroupAddon>
    <Input  type="textarea" name="description" placeholder="description"onChange={this.props.onChange} value={this.props.state.description} />
  </InputGroup>
  <Button color="primary" onClick={this.props.add} >Ok</Button>
  </div>
    );
  }
}

export default Form;