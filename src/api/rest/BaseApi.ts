import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { camelCaseObjectKeys, snakeCaseObjectKeys } from '@utils';
import RestClient from './RestClient';
import { captureException } from '@services/monitoring';

abstract class BaseApi {
  readonly restClient: RestClient;

  public constructor(restClient?: RestClient) {
    if (restClient) {
      this.restClient = restClient;
    }
    this.restClient = new RestClient();

    this.initializeResponseInterceptor();
    this.initializeRequestInterceptor();
  }

  protected initializeResponseInterceptor = (): void => {
    this.restClient.axiosInstance.interceptors.response.use(this.handleResponse, this.handleError);
  };

  protected initializeRequestInterceptor = (): void => {
    this.restClient.axiosInstance.interceptors.request.use(this.handleRequest, this.handleError);
  };

  protected handleRequest = (axiosConfig: AxiosRequestConfig): AxiosRequestConfig => {
    const { data } = axiosConfig;

    const transformedData = snakeCaseObjectKeys(data);

    return {
      ...axiosConfig,
      data: transformedData,
    };
  };

  protected handleResponse = (response: AxiosResponse): AxiosResponse => {
    const { data } = response;

    let transformedData;

    if (Array.isArray(data)) {
      transformedData = data.map((item) => camelCaseObjectKeys(item));
    } else {
      transformedData = camelCaseObjectKeys(data);
    }

    return {
      ...response,
      data: transformedData,
    };
  };

  protected handleError = (err: Error): Promise<Error> => {
    captureException(err);
    return Promise.reject(err);
  };
}

export default BaseApi;
