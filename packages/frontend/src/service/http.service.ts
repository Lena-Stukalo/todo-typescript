/* eslint-disable prettier/prettier */
import axios from 'axios';
import { ITodoNotId } from '../modules/common/types/todo.types';

interface IConfig {
    url: string;
    data?: ITodoNotId;
}

export class HttpSerivce {
    baseUrl: string;

    fetchingService: typeof axios;

    apiVersion?: string;

    constructor(baseUrl: string, apiVersion = 'api') {
        this.baseUrl = baseUrl;
        this.fetchingService = axios;
        this.apiVersion = apiVersion;
    }

    private getFullApiUrl(url: string) {
        return `${this.baseUrl}/${this.apiVersion}/${url}`;
    }

    get(config: IConfig) {
        return this.fetchingService.get(this.getFullApiUrl(config.url));
    }

    put(config: IConfig) {
        return this.fetchingService.put(this.getFullApiUrl(config.url), config.data);
    }

    delete(config: IConfig) {
        return this.fetchingService.delete(this.getFullApiUrl(config.url));
    }

    post(config: IConfig) {
        return this.fetchingService.post(this.getFullApiUrl(config.url), config.data);
    }
}
