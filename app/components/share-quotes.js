import React from 'react';
export default class ShareQuote extends React.Component {
        constructor() {
            super();
            this.state = {
                tweetUrl: "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="
                , tumblrUrl: "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption="
            }
            this._handleTumblrClick = this._handleTumblrClick.bind(this);
            this._handleTweetClick = this._handleTweetClick.bind(this);
            this._handleFacebookClick = this._handleFacebookClick.bind(this);
            this._handleGoogleClick = this._handleGoogleClick.bind(this);
        }
        componentWillMount() {}
        render() {
            return ( < div > < a className = {
                    this.props.styles.socialButton
                }
                id = {
                    this.props.styles.tweetQuote
                }
                title = "Tweet this quote!"
                target = "_blank"
                onClick = {
                    this._handleTweetClick
                } > < i className = "fa fa-twitter fa-2x" > < /i> < /a > < a className = {
                    this.props.styles.socialButton
                }
                id = {
                    this.props.styles.tumblrQuote
                }
                title = "Post this quote on tumblr!"
                target = "_blank"
                onClick = {
                    this._handleTumblrClick
                } > < i className = "fa fa-tumblr fa-2x" > < /i> < /a > < a className = {
                    this.props.styles.socialButton
                }
                id = {
                    this.props.styles.facebookQuote
                }
                title = "Post this quote on Facebook!"
                target = "_blank"
                onClick = {
                    this._handleFacebookClick
                } > < i className = "fa fa-facebook fa-2x" > < /i> < /a > < a className = {
                    this.props.styles.socialButton
                }
                id = {
                    this.props.styles.googlePlusQuote
                }
                title = "Post this quote on Google+!"
                target = "_blank"
                onClick = {
                    this._handleGoogleClick
                } > < i className = "fa fa-google-plus fa-2x" > < /i> < /a > < /div>)
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
                //share via tumblr
            _handleTumblrClick(e) {
                    e.preventDefault();
                    if(this._inIframe){
                      this._openUrl(
                        this.state.tumblrUrl
                        + encodeURIComponent(this.props.author)
                        + '&content=' + encodeURIComponent(this.props.quote)
                      );
                    }
                }
                //share view twitter
            _handleTweetClick(e) {
                    if (this._inIframe()) {
                        this._openUrl(this.state.tweetUrl + encodeURIComponent('"' + this.props.quote + '" ' + this.props.author));
                    }
                }
                //share via Facebook
            _handleFacebookClick(e) {
                    e.preventDefault();
                }
                //share via Google
            _handleGoogleClick(e) {
                e.preventDefault();
            }
        }
        ShareQuote.propTypes = {
            quote: React.PropTypes.string.isRequired
            , author: React.PropTypes.string.isRequired
        }
