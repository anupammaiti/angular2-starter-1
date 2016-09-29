import {Injectable} from '@angular/core';
import {Response} from '../dto/response';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ResponseService {

    private url = 'api';  // URL to web api

    constructor(
        private http: Http
    ) {}

    getResponse(): Promise<Response> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json() as Response)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
