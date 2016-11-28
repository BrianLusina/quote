import React from 'react';

export default class ShareQuote extends React.Component{
  render(){
    return(
      <div>
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
    </div>
    )
  }
}
