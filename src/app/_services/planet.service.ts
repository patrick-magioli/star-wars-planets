import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Page } from '../_model/page';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  public url = environment.core_api + 'planets/?format=json'; // URL to web api

  constructor(private http: HttpClient) { }

  getAll(): Observable<Page[]> {
      return this.http.get<Page[]>(this.url);
  }

}
