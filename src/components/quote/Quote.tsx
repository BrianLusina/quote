import { FunctionComponent } from 'react';

type QuoteProps = {
  quote: string;
  author: string;
};

const Quote: FunctionComponent<QuoteProps> = ({ author, quote }) => {
  <div className="quoteContainer">
    <div className="quoteText">
      <i className="fa fa-quote-left"> </i>
      <span>{quote}</span>
      <i className="fa fa-quote-right"></i>
    </div>
    <div className="quoteAuthor">
      --<span>{author}</span>
    </div>
  </div>;
};

export default Quote;
