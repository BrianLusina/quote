import React from 'react';
import jQuery from 'jquery';

export default class QuoteContainer extends React.Component{

  constructor(){
    super();
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

//"X-Mashape-Key": "HT2nuAA369mshsFX1vMRe7cfr4drp14TBx9jsnovWg3V75k7o5",
//url: 'https://kashyap-random_quotes.p.mashape.com/',

  _getQuotes(){
    jQuery.ajax({
      method:"GET",
      url: 'https://kashyap-random_quotes.p.mashape.com/',
      success:function(response){
        var r = JSON.parse(response);
        currentQuote = r.quote;
        currentAuthor = r.author;
      },

    });
  }
}

//required prop types for this Component
QuoteContainer.propTypes = {
  apiUrl :React.PropTypes.string.isRequired
}
