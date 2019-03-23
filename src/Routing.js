import React, { Component } from 'react';
import { Route, Switch,BrowserRouter as Router } from 'react-router-dom';
import LoginContainer from './Login/LoginContainer';
import MainNewsContainer from './newsPage/MainNews/MainNewsContainer';
import MainPage from './newsPage/MainPage'
import NewsArticleContainer from './newsPage/Article/NewsArticleContanier';
import FormContainer from './form/FormContanier';
import CustomArticlesContanier from './CustomArticles/CustomArticlesContanier';


class Routing extends Component {
    constructor(props) {
        super(props)
        this.state = {
         user:{username:"admin",password:"1234"},
         isLogedin:false,
         news:[],
         customArticle:[]
        }
     this.logedin=this.logedin.bind(this)
     this.setNews=this.setNews.bind(this)
     this.addCustomArticles=this.addCustomArticles.bind(this)
      }
    logedin(){
            this.setState({isLogedin:true})}
    setNews(News){
      this.setState({news:News})
    }
    addCustomArticles(article){
      this.setState(prevState=> prevState.customArticle=[...prevState.customArticle,{...article}])
    }
    componentDidMount(){
      // var logedin=localStorage.getItem('logedin');
      // if(logedin===true){
      //  this.logedin();
      //       }
    }
  render() {
    return (
     <Router>
         <Switch>
         <Route path="/" render={()=><LoginContainer login={this.logedin} user={this.state.user}/>} exact/>
         <MainPage path="/home" logedin={this.state.isLogedin} setNews={this.setNews} component={MainNewsContainer} exact/>
         <Route path={`/home/:id`}render={(props)=><NewsArticleContainer logedin={this.state.isLogedin} artical={this.state.news[props.match.params.id]}/>}exact/>
         <MainPage path="/addartical"  logedin={this.state.isLogedin}  addArtical={this.addCustomArticles}component={FormContainer}exact/>
         <MainPage path="/customarticles"  logedin={this.state.isLogedin}  customArticles={this.state.customArticle} component={CustomArticlesContanier}exact/>
         </Switch>
     </Router>
    );
  }
}

export default Routing;
