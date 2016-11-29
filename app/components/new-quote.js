import React from 'react';

export default class NewQuote extends React.Component{
  constructor(){
    super();
    this.state = {
      clicked: false
    }
    this._handleClick = this._handleClick.bind(this);
  }
  render(){
    return(
      <div>
        <button className="button" id="new-quote">New quote</button>
      </div>
    )
  }

  //handles click events fo the new Quote button, this triggers AJAX request
  _handleClick(){
    this.setState({
      clicked: !this.state.clicked
    })
  }
}
