import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { camelCaseObjectKeys, snakeCaseObjectKeys } from '@utils';
import { captureException, captureScope } from '@services/monitoring';
import { Severity } from '@sentry/react';
import RestClient from './RestClient';
import config from '@apiConfig';

const {
  api: { username, password },
} = config;

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
      auth: {
        username,
        password,
      },
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
    const scope = captureScope(
      {
        type: 'API Error',
        message: err.message,
        timestamp: Date.now(),
        category: 'API',
      },
      Severity.Error,
    );
    captureException(err, scope, err.message);
    return Promise.reject(err);
  };
}

export default BaseApi;
