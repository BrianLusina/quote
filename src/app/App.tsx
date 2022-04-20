import React, { FunctionComponent } from 'react';
import Quote from '@components/quote';
import ShareQuote from '@components/share';
import config from '@config';

const App: FunctionComponent = () => {
  const [quote, setQuote] = React.useState('');
  const [author, setAuthor] = React.useState('');

  return (
    <div>
      <Quote author={author} quote={quote} />
      <ShareQuote author={author} quote={quote} />
      <div className="footer">
        Made with <i className="fa fa-heart" /> and by
        <a id="author" href={config.meta.ownerUrl}>
          {config.meta.owner}
        </a>
      </div>
    </div>
  );
  

  // perform AJAX request right after mounting
  componentDidMount() {
    this._fetchQuotes();
  }

  /**
    ajax call to getch quotes from server, every 30 seconds.
    This updates the states of these components which can be passed on to the quote container
    */
  _fetchQuotes() {
    const colors = [
      '#16a085',
      '#27ae60',
      '#2c3e50',
      '#f39c12',
      '#e74c3c',
      '#9b59b6',
      '#FB6964',
      '#342224',
      '#472E32',
      '#BDBB99',
      '#77B1A9',
      '#73A857',
    ];

    setInterval(
      function () {
        jQuery.ajax({
          method: 'GET',
          url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
          headers: {
            'X-Mashape-Key': 'HT2nuAA369mshsFX1vMRe7cfr4drp14TBx9jsnovWg3V75k7o5',
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          success: (response) => {
            const json = JSON.parse(response);
            const author = json['author'];
            const quote = json['quote'];
            this.setState({ author, quote });

            //change background colors
            const color = Math.floor(Math.random() * colors.length);
            jQuery('html body').animate(
              {
                backgroundColor: colors[color],
                color: colors[color],
              },
              1000,
            );
          },
          error: (request, errorType, errorMessage) => {
            console.error(errorType, errorMessage);
          },
          timeout: 3000,
          complete: (response, status) => {},
        });
      }.bind(this),
      10000,
    );
  }
}
