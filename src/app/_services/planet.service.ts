import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Planet } from '../_model/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  public url = environment.core_api; // URL to web api

  constructor(private http: HttpClient) { }

  getPlanet(planetNumber: number): Observable<Planet> {
    return this.http.get<Planet>(this.url + 'planets/' + planetNumber + '?format=json');
  }
}
