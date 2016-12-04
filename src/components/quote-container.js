import React from 'react';
import jQuery from 'jquery';

export default class QuoteContainer extends React.Component{

  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <div>
            <i className="fa fa-quote-left"> </i>
            <span>{ this.props.quote }</span>
            <i className="fa fa-quote-right"></i>
        </div>
        <div>
        --<span>{ this.props.author }</span>
        </div>
      </div>
    )
  }
}

//required prop types for this Component
QuoteContainer.propTypes = {
  quote: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired
}
