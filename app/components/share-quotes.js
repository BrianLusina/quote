import React from 'react';

export default class ShareQuote extends React.Component{

  constructor(){
    super();

    this._handleClick = this._handleClick.bind(this);
  }
  render(){
    return(
      <div>
        <a className={ this.props.styles.socialButton } id={ this.props.styles.tweetQuote } title="Tweet this quote!" target="_blank"
          onClick={this._handleClick}>
            <i className="fa fa-twitter fa-2x"></i>
        </a>
        
        <a className={ this.props.styles.socialButton } id={ this.props.styles.tumblrQuote } title="Post this quote on tumblr!" target="_blank"
          onClick={this._handleClick}>
            <i className="fa fa-tumblr fa-2x"></i>
        </a>

        <a className={ this.props.styles.socialButton } id={ this.props.styles.facebookQuote } title="Post this quote on Facebook!" target="_blank"
          onClick={this._handleClick}>
            <i className="fa fa-facebook fa-2x"></i>
        </a>

        <a className={ this.props.styles.socialButton } id={ this.props.styles.googlePlusQuote } title="Post this quote on Google+!" target="_blank"
          onClick={this._handleClick}>
            <i className="fa fa-google-plus fa-2x"></i>
        </a>
    </div>
    )
  }

  _openUrl(url){
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
  }

  //opens the url to share quote
  _handleClick(e){
    e.preventDefault();

  }
}
