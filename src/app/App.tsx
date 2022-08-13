import Quote from '@components/quote';
import ShareQuote from '@components/share';
import config from '@config';
import useFetchQuote from '@hooks/useFetchQuote';
import usePageViews from '@hooks/usePageViews';

function App() {
  usePageViews();
  const { quote, author } = useFetchQuote(10000);

  return (
    <div>
      <div className="quoteContainer">
        <Quote author={author} quote={quote} />
        <ShareQuote author={author} quote={quote} />
      </div>
      <div className="footer">
        Made with <i className="fa fa-heart" /> by
        <a id="author" href={config.meta.ownerUrl}>
          {config.meta.owner}
        </a>
      </div>
    </div>
  );
}

export default App;
