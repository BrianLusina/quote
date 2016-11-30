import React from 'react';
import jQuery from 'jquery';

export default class QuoteContainer extends React.Component{

  constructor(){
    super();
  }

  componentWillMount(){  }

  render(){
    return (
      <div>
        <div className={ this.props.styles.quoteText }>
            <i className="fa fa-quote-left"> </i>
            <span id={ this.props.styles.quote }>{ this.props.quote }</span>
            <i className="fa fa-quote-right"></i>
        </div>
        <div className={ this.props.styles.quoteAuthor }>
        --<span id={ this.props.styles.author }>{ this.props.author }</span>
        </div>
      </div>
    )
  }

  componentDidMount(){
  }
}

//required prop types for this Component
QuoteContainer.propTypes = {
  quote: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired
}
