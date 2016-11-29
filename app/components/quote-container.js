import React from 'react';
import jQuery from 'jquery';

export default class QuoteContainer extends React.Component{

  constructor(){
    super();

    this.state ={
      quotes : []
    }
  }

  componentWillMount(){
    this._fetchQuotes();
  }

  render(){
    return (
      <div>
        <div className="quoteText">
            <i className="fa fa-quote-left"> </i>
            <span id="quote"></span>
            <i className="fa fa-quote-right"></i>
        </div>
        <div className="quoteAuthor">
        --<span id="author"></span>
        </div>

      </div>
    )
  }

  _getQuotes() {
    return this.state.quotes.map((quote) => {
      return quote;
    });
  }

/**
"X-Mashape-Key": "HT2nuAA369mshsFX1vMRe7cfr4drp14TBx9jsnovWg3V75k7o5",
    url: this.props.apiUrl,
*/

  _fetchQuotes(){
    jQuery.ajax({
      method:"GET",
      url:"https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies",
      headers: {
        "X-Mashape-Key": "HT2nuAA369mshsFX1vMRe7cfr4drp14TBx9jsnovWg3V75k7o5",
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success:(response) => {
        var json = JSON.parse(response);
        console.log(response);
      },
      error:(request, errorType, errorMessage) => {
        console.error(errorType, errorMessage);
      },
      timeout: 3000,
      complete: (response, status) => {
        console.log(response, status);
      }
    });
  }
}

//required prop types for this Component
QuoteContainer.propTypes = {
  apiUrl :React.PropTypes.string.isRequired
}
