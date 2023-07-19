/* eslint-disable prettier/prettier */
import axios from 'axios';

interface IConfig {
    url: string;
    data?: object;
}

export class HttpSerivce {
    baseUrl: string;

    fetchingService: typeof axios;

    apiVersion?: string;

    constructor() {
        this.baseUrl = process.env.REACT_APP_SERVER_URL!;
        this.fetchingService = axios;
        this.apiVersion = 'api';
    }

    private getFullApiUrl(url: string) {
        return `${this.baseUrl}/${this.apiVersion}/${url}`;
    }

    tokenSet(token:string) {
        this.fetchingService.defaults.headers.common.Authorization = `Bearer ${token}`;
      }

      tokenUnSet() {
        this.fetchingService.defaults.headers.common.Authorization = '';
      }

    get(config: IConfig) {
        return this.fetchingService.get(this.getFullApiUrl(config.url));
    }

    patch(config: IConfig) {
        return this.fetchingService.patch(this.getFullApiUrl(config.url), config.data);
    }

    delete(config: IConfig) {
        return this.fetchingService.delete(this.getFullApiUrl(config.url));
    }

    post(config: IConfig) {
        return this.fetchingService.post(this.getFullApiUrl(config.url), config.data);
    }
}
