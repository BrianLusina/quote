import React from 'react';
export default class ShareQuote extends React.Component {
        constructor() {
            super();
            this.state = {
                tweetUrl: "https://twitter.com/intent/tweet?hashtags=quotes&related=brianlusina&text=",
                tumblrUrl: "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption="
            }
            this._handleTumblrClick = this._handleTumblrClick.bind(this);
            this._handleTweetClick = this._handleTweetClick.bind(this);
            this._handleButtonClick = this._handleButtonClick.bind(this);
        }
        componentWillMount() {}
        render() {
          const propsObj = this.props;

          var shareButtons = [
              "fa fa-twitter fa-2x",
              "fa fa-tumblr fa-2x",
              "fa fa-facebook fa-2x",
              "fa fa-google-plus fa-2x"
          ];

          var list = shareButtons.map((item, indx) => {
            return <a key = {indx} className= {item} onClick = {this._handleButtonClick}></a>;
          })
            return (
              <div>
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
              //twitter
              if(element.contains("fa-twitter")){
                if (this._inIframe()) {
                    this._openUrl(this.state.tweetUrl + encodeURIComponent('"' + this.props.quote + '" ' + this.props.author));
                }
                //tumblr
              }
              //tumblr
              else if(element.contains("fa-tumblr")){
                if(this._inIframe){
                  this._openUrl(
                    this.state.tumblrUrl
                    + encodeURIComponent(this.props.author)
                    + '&content=' + encodeURIComponent(this.props.quote)
                  );
                }
              }
              //google plus
              else if(element.contains("fa-google-plus")){

              }
              //facebook
              else if(element.contains("fa-facebook")){

              }
            }
        }
        ShareQuote.propTypes = {
            quote: React.PropTypes.string.isRequired
            , author: React.PropTypes.string.isRequired
        }
