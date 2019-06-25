import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Planet } from '../_model/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  public url = environment.core_api + 'planets'; // URL to web api

  constructor(private http: HttpClient) { }

  getAll(): Observable<Planet[]> {
      return this.http.get<Planet[]>(this.url);
  }

}
