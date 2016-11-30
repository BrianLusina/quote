import React from 'react';
import QuoteContainer from './quote-container';
import ShareQuote from './share-quotes';
import NewQuote from './new-quote';


export default class App extends React.Component{
    render(){
        return(
            <div>
              <div>
                <QuoteContainer styles={ this.props.styles } apiUrl="https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous"/>
                <ShareQuote styles={ this.props.styles }/>
                <NewQuote styles={ this.props.styles }/>
              </div>
              <div className={this.props.styles.footer}>
                  Made with <i className="fa fa-heart"></i> and <i className="fa fa-coffee"></i> by
              <a href="http://thelusina.netlify.com/">The Lusina</a>
              </div>
          </div>
        );
    }
}
