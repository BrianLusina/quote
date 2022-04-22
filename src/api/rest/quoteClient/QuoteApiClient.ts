import BaseApi from '../BaseApi';
import { QuoteResponseDto } from './dto';

export class QuoteApiClient extends BaseApi {
  async fetchQuote(): Promise<QuoteResponseDto> {
    try {
      const { data } = await this.restClient.get<QuoteResponseDto>('/quote');
      return data;
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      throw Error(error.message);
    }
  }
}

export default new QuoteApiClient();
