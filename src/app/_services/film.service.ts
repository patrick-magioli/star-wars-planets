import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../_model/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getMoviesFromPlanet(filmUrl: Array<string>): Observable<Film> {
    return this.http.get<Film>(filmUrl + '?format=json');
  }
}
