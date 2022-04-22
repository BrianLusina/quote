/* eslint-disable react/function-component-definition */
import { FC, MouseEvent } from 'react';

type ShareQuoteProps = {
  author: string;
  quote: string;
};

const ShareQuote: FC<ShareQuoteProps> = ({ author, quote }) => {
  const tweetUrl = 'https://twitter.com/intent/tweet?hashtags=quotes&via=brianlusina&text=';
  const shareButtons = ['fa fa-twitter fa-2x', 'fa fa-facebook fa-2x', 'fa fa-tumblr fa-2x'];

  const openUrl = (url: string) => {
    window.open(
      url,
      'Share',
      'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0',
    );
  };

  const inIframe = () => {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  };

  const handleButtonClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const element = e.target.classList;
    if (element.contains('fa-twitter')) {
      if (inIframe()) {
        openUrl(tweetUrl + encodeURIComponent('"' + quote + '" ' + author));
      }
    }
    //facebook
    else if (element.contains('fa-facebook')) {
      // facebookUrl +
      //   encodeURIComponent(author) +
      //   '&content=' +
      //   encodeURIComponent(quote);
    }
  };

  return (
    <div className="quoteButtons">
      {shareButtons.map((item, indx) => (
        <div key={indx} className="socialButton" onClick={handleButtonClick}>
          <i className={item} />
        </div>
      ))}
    </div>
  );
};

export default ShareQuote;
