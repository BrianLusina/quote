import Quote from '@components/quote';
import ShareQuote from '@components/share';
import config from '@config';
import useFetchQuote from '@hooks/useFetchQuote';

function App() {
  const { quote, author } = useFetchQuote(10000);

  // //change background colors
  // const color = Math.floor(Math.random() * colors.length);
  // jQuery('html body').animate(
  //   {
  //     backgroundColor: colors[color],
  //     color: colors[color],
  //   },
  //   1000,
  // );

  return (
    <div>
      <div className="quoteContainer">
        <Quote author={author} quote={quote} />
        <ShareQuote author={author} quote={quote} />
      </div>
      <div className="footer">
        Made with <i className="fa fa-heart" /> and by
        <a id="author" href={config.meta.ownerUrl}>
          {config.meta.owner}
        </a>
      </div>
    </div>
  );
}

export default App;
