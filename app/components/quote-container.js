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
    this._getQuotes();
  }

  render(){
    return (
      <div>
        <div className="quoteText">
            <i className="fa fa-quote-left"> </i>
            <span id="quote">{ quotes }</span>
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

//"X-Mashape-Key": "HT2nuAA369mshsFX1vMRe7cfr4drp14TBx9jsnovWg3V75k7o5",
//url: 'https://kashyap-random_quotes.p.mashape.com/',

  _fetchQuotes(){
    jQuery.ajax({
      method:"GET",
      url: this.props.apiUrl,
      success:(quotes) => {
        this.setState({quotes})
      },
    });
  }
}

//required prop types for this Component
QuoteContainer.propTypes = {
  apiUrl :React.PropTypes.string.isRequired
}
