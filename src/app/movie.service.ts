import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {MoviesResponse} from './movies-response';
import {AppSettings} from './app.settings';

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies (page: number): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(`${AppSettings.MOVIES_API_URL}&page=${page}`);
  }

}
