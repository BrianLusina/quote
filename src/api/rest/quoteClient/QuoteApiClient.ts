import { captureException } from '@monitoring';
import BaseApi from '../BaseApi';
import { QuoteResponseDto } from './dto';

export class QuoteApiClient extends BaseApi {
  async fetchQuote(): Promise<QuoteResponseDto> {
    try {
      const { data } = await this.restClient.get<QuoteResponseDto>('');
      return data;
    } catch (error) {
      const err = error as Error;
      captureException(err);
      throw err;
    }
  }
}

export default new QuoteApiClient();
