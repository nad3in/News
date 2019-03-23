import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './form.css'
import Form from './Form';
class FormContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
         title:"",description:"",
        }
        this.sendNewArticle=this.sendNewArticle.bind(this)
      }
      onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
      }
      sendNewArticle(){
      if(this.state.title!==""){
       this.props.addArticle({title:this.state.title,description:this.state.description})
       this.setState({title:"",description:""})
      }
      }

  render() {
    return (
       <div>
    <Form onChange={this.onChange} add={this.sendNewArticle} state={this.state}/>
  </div>
    );
  }
}

export default FormContainer;