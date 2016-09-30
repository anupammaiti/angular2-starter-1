import {Injectable} from '@angular/core';
import {Response} from '../dto/response';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Request} from "../dto/request";

@Injectable()
export class ResponseService {

    private url = 'api';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(
        private http: Http
    ){}

    get(): Promise<Response> {
        return this.http.get(this.url)
            .toPromise()
            .then(res => res.json() as Response)
            .catch(this.handleError);
    }

    post(request: Request): Promise<Response> {
        return this.http
            .post(this.url, JSON.stringify(request), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Response)
            .catch(this.handleError);
    }

    put(request: Request): Promise<Response> {
        return this.http
            .put(this.url, JSON.stringify(request), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Response)
            .catch(this.handleError);
    }

    delete(id: number): Promise<Response> {
        const url = `${this.url}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Response)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
