import React, { Component } from 'react';
import axios from 'axios';
import MainNews from './MainNews';
class MainNewsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      news: [],
      isLoading: true
    }
    this.getArticalsFromApi = this.getArticalsFromApi.bind(this)
  }
  getArticalsFromApi(articals) {
    this.setState({ news: articals, isLoading: false });
  }


  componentDidMount() {
    var self = this;
    if(this.props.logedin){
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=7e7b02f0177340dfb772233c4747d5e6')
      .then(function (response) {
        self.getArticalsFromApi(response.data.articles)
        self.props.setNews(response.data.articles);
      })
      .catch(function (error) {
        console.log(error);
      });}
  }

  render() {
    return (
      <div>
       <MainNews news={this.state.news} isLoading={this.state.isLoading}/>
      </div>
    );
  }
}

export default MainNewsContainer;