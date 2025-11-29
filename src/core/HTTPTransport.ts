export enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

const DEFAULT_TIMEOUT = 5000;

type RequestOptions = {
  method: HTTPMethod;
  data?: unknown;
  headers?: Record<string, string>;
  timeout?: number;
};

type QueryParams = Record<string, string | number>;

type Options = {
  data?: unknown;
  headers?: Record<string, string>;
  timeout?: number;
  queryParams?: QueryParams;
};

type HTTPMethodType = <R = unknown>(url: string, options?: Options) => Promise<R>;

export class HTTPTransport {
  private baseURL: string;

  constructor(baseURL: string = '') {
    this.baseURL = baseURL;
  }

  get: HTTPMethodType = (url, options = {}) => {
    const { queryParams, ...restOptions } = options;
    const fullUrl = queryParams
      ? `${url}?${this.buildQueryString(queryParams)}`
      : url;
    return this.request(fullUrl, { ...restOptions, method: HTTPMethod.GET }, options.timeout);
  };

  post: HTTPMethodType = (url, options = {}) => {
    const { queryParams, ...restOptions } = options;
    void queryParams;
    return this.request(url, { ...restOptions, method: HTTPMethod.POST }, options.timeout);
  };

  put: HTTPMethodType = (url, options = {}) => {
    const { queryParams, ...restOptions } = options;
    void queryParams;
    return this.request(url, { ...restOptions, method: HTTPMethod.PUT }, options.timeout);
  };

  delete: HTTPMethodType = (url, options = {}) => {
    const { queryParams, ...restOptions } = options;
    void queryParams;
    return this.request(url, { ...restOptions, method: HTTPMethod.DELETE }, options.timeout);
  };

  private request<R = unknown>(url: string, options: RequestOptions, timeoutOverride?: number): Promise<R> {
    const { method, data, headers = {}, timeout: optionsTimeout } = options;
    const timeout = timeoutOverride ?? optionsTimeout ?? DEFAULT_TIMEOUT;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const fullUrl = `${this.baseURL}${url}`;

      xhr.open(method, fullUrl);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.timeout = timeout;

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const response = xhr.responseText ? JSON.parse(xhr.responseText) : xhr.responseText;
            resolve(response as R);
          } catch {
            resolve(xhr as unknown as R);
          }
        } else {
          reject(new Error(`HTTP Error: ${xhr.status} ${xhr.statusText}`));
        }
      };

      xhr.onerror = () => {
        reject(new Error('Network Error'));
      };

      xhr.ontimeout = () => {
        reject(new Error('Request Timeout'));
      };

      if (data) {
        if (data instanceof FormData) {
          xhr.send(data);
        } else {
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.send(JSON.stringify(data));
        }
      } else {
        xhr.send();
      }
    });
  }

  private buildQueryString(params: QueryParams): string {
    return Object.keys(params)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
  }
}

