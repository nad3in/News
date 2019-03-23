import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../newsPage/MainNews/cards.css'
class CustomArticlesContanier extends Component {
  render() {
    return (
 <div className="container">
 
{ this.props.customArticles.length === 0 ? "no articles found" : this.props.customArticles.map((a,i) =>

<div key={i}className="cards">
  <div className="card">
    <img className="card-img-top" src={'https://mastergolflivestream.com/images/clipart-paper-article-1.jpg'}  alt=""></img>
    <div className="card-body">
      <h5 className="card-title">{a.title}</h5>
      <p className="card-text">{a.description}</p>
      
    </div>
  </div>

</div>
)}
</div>
    );
  }
}

export default CustomArticlesContanier;