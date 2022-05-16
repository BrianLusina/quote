import BaseApi from '../BaseApi';
import { QuoteResponseDto } from './dto';

export class QuoteApiClient extends BaseApi {
  async fetchQuote(quoteId: string): Promise<QuoteResponseDto> {
    try {
      const { data } = await this.restClient.get<QuoteResponseDto>(`/${quoteId}`);
      return data;
    } catch (error) {
      const err = error as Error;
      throw err;
    }
  }

  async fetchQuotes(): Promise<QuoteResponseDto[]> {
    try {
      const { data } = await this.restClient.get<QuoteResponseDto[]>('');
      return data;
    } catch (error) {
      const err = error as Error;
      throw err;
    }
  }

  async fetchRandomQuote(): Promise<QuoteResponseDto> {
    try {
      const { data } = await this.restClient.get<QuoteResponseDto>('/random');
      return data;
    } catch (error) {
      const err = error as Error;
      throw err;
    }
  }
}

export default new QuoteApiClient();
