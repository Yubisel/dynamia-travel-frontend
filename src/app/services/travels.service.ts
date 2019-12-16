import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ITravel } from '../interfaces/travel';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_URL } from './../config/config';

@Injectable({
    providedIn: 'root'
})
export class TravelsService {

    _url: string = API_URL + 'travels';

    constructor(private http: HttpClient) { }

    private getHeaders() {
        let headers = new HttpHeaders();
        headers.append('Accept', 'application/json');
        return headers;
      }

      errorHandler(error: HttpErrorResponse){
          return throwError(error);
      }

    getTravels(): Observable<ITravel[]> {
        return this.http.get<ITravel[]>(this._url, { headers: this.getHeaders()})
        .pipe(catchError(this.errorHandler));
    }

    getTravel(id): Observable<ITravel> {
        return this.http.get<ITravel>(this._url + '/' + id, { headers: this.getHeaders()});
    }

    deleteTravel(id): Observable<any> {
        return this.http.delete(this._url + '/' + id, { headers: this.getHeaders() });
    }

    saveTravel(travel): Observable<any> {
        return this.http.post(this._url, travel);
    }

    updateTravel(id, travel): Observable<any> {
        return this.http.put(this._url + '/' + id, travel);
    }
}
