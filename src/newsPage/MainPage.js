import React from 'react'
import {Route} from 'react-router-dom';
import { Redirect } from 'react-router'
import NavContanier from '../navBar/NavContainer'
const MainPage = ({component: Component,logedin:Logedin,setNews:SetNews,addArtical:AddArticle,customArticles:CustomArticles,...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
          <React.Fragment>
        {Logedin === false && <Redirect to='/' />}
           <NavContanier/>
          <Component {...matchProps} setNews={SetNews} addArticle={AddArticle}logedin={Logedin} customArticles={CustomArticles}/>
          </React.Fragment>
       
      
      )} />
    )
  };
  export default MainPage;