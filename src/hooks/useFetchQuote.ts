import { useState } from 'react';
import quoteApiClient from '@quoteClient';
import { FAILED, IDLE, LOADING, LOADING_STATES, SUCCESS } from '@constants';
import useInterval from './useInterval';

export default function useFetchQuote(delay: number): {
  quote: string;
  author: string;
  status: LOADING_STATES;
} {
  const [status, setStatus] = useState<LOADING_STATES>(IDLE);
  const [saying, setQuote] = useState<string>('');
  const [author, setAuthor] = useState<string>('');

  useInterval(async () => {
    try {
      setStatus(LOADING);
      const { quote, author: originalAuthor } = await quoteApiClient.fetchRandomQuote();
      setQuote(quote);
      setAuthor(originalAuthor);
      setStatus(SUCCESS);
    } catch (error) {
      setStatus(FAILED);
    } finally {
      setStatus(IDLE);
    }
  }, delay);

  return { quote: saying, author, status };
}
