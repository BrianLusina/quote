import React from 'react';

export default class QuoteContainer extends React.Component{
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
}
