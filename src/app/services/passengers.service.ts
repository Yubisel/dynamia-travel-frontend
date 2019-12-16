import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { IPassenger } from '../interfaces/passenger';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_URL } from './../config/config';

@Injectable({
    providedIn: 'root'
})
export class PassengersService {

    _url: string = API_URL + 'passengers';

    constructor(private http: HttpClient) { }

    private getHeaders() {
        let headers = new HttpHeaders();
        headers.append('Accept', 'application/json');
        return headers;
      }

      errorHandler(error: HttpErrorResponse) {
          return throwError(error);
      }

    getPassengers(): Observable<IPassenger[]> {
        return this.http.get<IPassenger[]>(this._url, { headers: this.getHeaders()})
        .pipe(catchError(this.errorHandler));
    }

    getPassenger(id): Observable<IPassenger> {
        return this.http.get<IPassenger>(this._url + '/' + id, { headers: this.getHeaders()});
    }

    deletePassenger(id): Observable<any> {
        return this.http.delete(this._url + '/' + id, { headers: this.getHeaders() });
    }

    savePassenger(Passenger): Observable<any> {
        return this.http.post(this._url, Passenger)
        .pipe(catchError(this.errorHandler));
    }

    updatePassenger(id, Passenger): Observable<any> {
        return this.http.put(this._url + '/' + id, Passenger);
    }
}
