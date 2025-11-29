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

export class HTTPTransport {
  private baseURL: string;

  constructor(baseURL: string = '') {
    this.baseURL = baseURL;
  }

  get(url: string, queryParams?: QueryParams): Promise<XMLHttpRequest> {
    const fullUrl = queryParams
      ? `${url}?${this.buildQueryString(queryParams)}`
      : url;
    return this.request(fullUrl, { method: HTTPMethod.GET });
  }

  post(url: string, data?: unknown): Promise<XMLHttpRequest> {
    return this.request(url, { method: HTTPMethod.POST, data });
  }

  put(url: string, data?: unknown): Promise<XMLHttpRequest> {
    return this.request(url, { method: HTTPMethod.PUT, data });
  }

  delete(url: string, data?: unknown): Promise<XMLHttpRequest> {
    return this.request(url, { method: HTTPMethod.DELETE, data });
  }

  private request(url: string, options: RequestOptions): Promise<XMLHttpRequest> {
    const { method, data, headers = {}, timeout = DEFAULT_TIMEOUT } = options;

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
          resolve(xhr);
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

