import React from 'react';
export default class ShareQuote extends React.Component {
  constructor() {
    super();
    this.state = {
      tweetUrl: "https://twitter.com/intent/tweet?hashtags=quotes&via=brianlusina&text="
    }
    this._handleButtonClick = this._handleButtonClick.bind(this);
  }

  render() {

    var shareButtons = [
      "fa fa-twitter fa-2x",
      "fa fa-facebook fa-2x",
      "fa fa-google-plus fa-2x",
      "fa fa-tumblr fa-2x"
    ];

    var list = shareButtons.map((item, indx) => {
      return (
        <a key = {indx} className="socialButton" onClick = {this._handleButtonClick}>
          <i className={item}></i>
        </a>
      );
    });
    return (
      <div className="quoteButtons">
        {list}
      </div>)
    }

  _openUrl(url) {
      window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
  }

  _inIframe() {
      try {
          return window.self !== window.top;
      }
    catch (e) {
        console.error("inIframe Error: " + e);
        return true;
          }
    }

  _handleButtonClick(e){
      e.preventDefault();
      var element = e.target.classList;
      if(element.contains("fa-twitter")){
          if (this._inIframe()) {
              this._openUrl(this.state.tweetUrl + encodeURIComponent('"' + this.props.quote + '" ' + this.props.author));
          }
        }
        //google plus
        else if(element.contains("fa-google-plus")){
          if(this._inIframe){
            this.state.googlePlusUrl +
            encodeURIComponent(this.props.author) +
            "&content=" + encodeURIComponent(this.props.quote)
          }
        }
        //facebook
        else if(element.contains("fa-facebook")){
          this.state.facebookUrl +
          encodeURIComponent(this.props.author) +
          "&content=" + encodeURIComponent(this.props.quote)
        }
    }
}

ShareQuote.propTypes = {
    quote: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired
}
