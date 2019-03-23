import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom';
import './spinner.css'
import './cards.css'
class MainNews extends Component {
  addDefaultSrc(ev){
    ev.target.src = 'https://mastergolflivestream.com/images/clipart-paper-article-1.jpg'
  }
  render() {
    return (
      <div>
      {this.props.isLoading ? <div className="spinner-grow text-info" role="status">
  <span className="sr-only">Loading...</span>
</div> : (this.props.news.length === 0 ? "no articles found" : this.props.news.map((a,i) =>

          <Link key={i} to={`home/${i}`} className="cards">
            <div className="card">
              <img className="card-img-top" src={a.urlToImage==null?'https://mastergolflivestream.com/images/clipart-paper-article-1.jpg':a.urlToImage}  alt=""></img>
              <div className="card-body">
                <h5 className="card-title">{a.title}</h5>
                <p className="card-text">{a.description}</p>
                
              </div>
            </div>

          </Link>
          ))}
      </div>
    );
  }
}

export default MainNews;