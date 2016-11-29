import React from 'react';
import jQuery from 'jquery';

export default class QuoteContainer extends React.Component{

  constructor(){
    super();

    this.state ={
      author: "",
      quote: ""
    }
  }

  componentWillMount(){  }

  render(){
    return (
      <div>
        <div className="quoteText">
            <i className="fa fa-quote-left"> </i>
            <span id="quote">{ this.state.quote }</span>
            <i className="fa fa-quote-right"></i>
        </div>
        <div className="quoteAuthor">
        --<span id="author">{ this.state.author }</span>
        </div>

      </div>
    )
  }

  // perform AJAX request right after mounting
  componentDidMount(){
    this._fetchQuotes();
  }

/**
"X-Mashape-Key": "HT2nuAA369mshsFX1vMRe7cfr4drp14TBx9jsnovWg3V75k7o5",
    url: this.props.apiUrl,
*/

  _fetchQuotes(){
    jQuery.ajax({
      method:"GET",
      url:this.props.apiUrl,
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
        console.log("Update Quote state: " + this.state.quote, this.state.author);
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
