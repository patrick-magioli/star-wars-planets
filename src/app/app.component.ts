import { Component, OnInit, ɵConsole } from '@angular/core';
import { PlanetService } from './_services/planet.service';
import { Planet } from './_model/planet';
import { Film } from './_model/film';
import { FilmService } from './_services/film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public planets: Planet = new Planet();
  public planetRandomNumber: number;
  public films: Array<Film> = [];

  constructor(
    private planetService: PlanetService,
    private filmService: FilmService
  ) { }

  ngOnInit() {
    this.getRandomPlanet();
  }

  getRandomPlanet() {
    this.planetRandomNumber = this.generateRandomNumber(1, 60);
    this.planetService.getPlanet(this.planetRandomNumber).subscribe(
      (data: Planet) => {
        this.planets = data;
        if (this.planets.films.length !== 0) {
          this.getFilm(this.planets.films);
        } else {
          this.films = [];
        }
        return this.planets;
      }
    );
  }
  generateRandomNumber(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getFilm(filmUrls): Array<Film> {
    filmUrls.forEach(
      (filmList) => {
        this.films = [];
        this.filmService.getMoviesFromPlanet(filmList).subscribe(
          (film: Film) => {
            this.films.push(film);
          }
        );
      }
    );
    return this.films;
  }
}
