import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  private formatErrors(error: any) {
    return Observable.throw(error.json());
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient.get(`${environment.apiBaseUrl}${path}`, { params: params })
      .map(
        (res) => res,
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.log('An error occurred:', err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }

          this.formatErrors(err);
        }
      );
  }

  put(path: string, body: Object = {}, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient.put(`${environment.apiBaseUrl}${path}`, JSON.stringify(body), { params: params })
      .map((res: Response) => res.json(),
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('An error occurred:', err.error.message);
          } else {
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }

          this.formatErrors(err);
        });
  }

  post(path: string, body: Object = {}, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient.post(`${environment.apiBaseUrl}${path}`, JSON.stringify(body), { params: params })
      .map((res: Response) => res.json(),
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('An error occurred:', err.error.message);
          } else {
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }

          this.formatErrors(err);
        });
  }

  delete(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient.delete(`${environment.apiBaseUrl}${path}`, { params: params })
      .map((res: Response) => res.json(),
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('An error occurred:', err.error.message);
          } else {
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }

          this.formatErrors(err);
        });
  }

  postFile(path: string, body: FormData, params: HttpParams = new HttpParams()): Observable<any> {

    const req = new HttpRequest('POST', `${environment.apiBaseUrl}${path}`, body, {reportProgress: true, responseType: 'json'});

    return this.httpClient.request(req);
  }
}
