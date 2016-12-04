import React from 'react';
import QuoteContainer from './quote-container';
import ShareQuote from './share-quotes';
import jQuery from 'jquery';

export default class App extends React.Component{

  constructor(){
    super();

    this.state ={
      author: "",
      quote: ""
    }
  }

  render(){
      return(
          <div>
            <div>
              <QuoteContainer author={ this.state.author } quote={ this.state.quote }/>
              <ShareQuote author={ this.state.author } quote={ this.state.quote }/>
            </div>
            <div>
                Made with <i className="fa fa-heart"></i> and <i className="fa fa-coffee"></i> by
            <a href="http://thelusina.netlify.com/">The Lusina</a>
            </div>
        </div>
      );
  }

    // perform AJAX request right after mounting
    componentDidMount(){
      this._fetchQuotes();
    }

    /**
    ajax call to getch quotes from server, every 30 seconds.
    This updates the states of these components which can be passed on to the quote container
    */
    _fetchQuotes(){
      setInterval(function () {
        jQuery.ajax({
          method:"GET",
          url:"https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
          headers: {
            "X-Mashape-Key": "HT2nuAA369mshsFX1vMRe7cfr4drp14TBx9jsnovWg3V75k7o5",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
          },
          success:(response) => {
            var json = JSON.parse(response);
            let author = json["author"];
            let quote = json['quote'];
            this.setState({author, quote});
          },
          error:(request, errorType, errorMessage) => {
            console.error(errorType, errorMessage);
          },
          timeout: 3000,
          complete: (response, status) => {
          }
        });
      }.bind(this), 30000);
    }
}

App.propTypes = {

}
