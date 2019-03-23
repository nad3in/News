import React, { Component } from 'react';
import { Redirect } from 'react-router'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './Article.css'
class NewsArticleContainer extends Component {
  render() {
    return (
      <div>
       
       {this.props.logedin === false && <Redirect to='/' />}
       {this.props.artical===undefined? <Redirect to='/home' />:
       <React.Fragment>
         <div className="container">
            <div class="row">
              <div class="col-sm">
              <Link to='/home' className="backLink"><img src="https://www.shareicon.net/data/128x128/2015/12/06/683390_arrows_512x512.png" className="back" alt=""></img></Link>
              </div>
              <div class="col-sm">
              <Link to='/' className="Logout">Logout</Link>
              </div>
            </div>
          </div>
       <div className="card article">
       <img src={this.props.artical.urlToImage==null?'https://mastergolflivestream.com/images/clipart-paper-article-1.jpg':this.props.artical.urlToImage}  alt="" className="card-img-top img" ></img>
          <div className="card-body">
            <h3 className="card-title title">{this.props.artical.title.substring(0, this.props.artical.title.indexOf(' - '))}</h3>
            <p className="card-text description ">{this.props.artical.description}</p>
       <p>If you want to read more about this <a href={this.props.artical.url}>click here</a></p>
           
          </div>
        </div>
      </React.Fragment>}
      </div>
    );
  }
}

export default NewsArticleContainer;