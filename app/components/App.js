import React from 'react';

export default class App extends React.Component{
    render(){
        return(
          <div className="quoteContainer">
  <div className="quoteText">
    <i className="fa fa-quote-left"> </i>
    <span id="quote"></span>
    <i className="fa fa-quote-right"></i>
  </div>
  
  <div className="quoteAuthor">
    --<span id="author"></span>
  </div>
  
  <div className="quoteButtons">
    <a className="socialButton" id="tweet-quote" title="Tweet this quote!" target="_blank">
     <i className="fa fa-twitter fa-2x"></i>
    </a>
    
    <a className="socialButton" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank">
      <i className="fa fa-tumblr fa-2x"></i>
    </a>
   
    <a className="socialButton" id="facebook-quote" title="Post this quote on Facebook!" target="_blank">
      <i className="fa fa-facebook fa-2x"></i>
    </a>
    
    <a className="socialButton" id="googlePlus-quote" title="Post this quote on Google+!" target="_blank">
      <i className="fa fa-google-plus fa-2x"></i>
    </a>
    
    <!--New Quote  -->
    <button className="button" id="new-quote">New quote</button>
    
  </div>
</div>

<div className="footer">
  Made with <i className="fa fa-heart"></i> and <i className="fa fa-coffee"></i> by <a href="https://codepen.io/mercury/">Mercury</a>
</div>
  
        );
    }
}