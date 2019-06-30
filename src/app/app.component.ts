import { Component, OnInit } from '@angular/core';
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

  public planetRandomNumber: number;
  public planets: Planet = new Planet();
  public planetsQuantity: number;
  public films: Array<string> = [];
  public filmsText: string;
  public loading = false;

  constructor(
    private planetService: PlanetService,
    private filmService: FilmService
  ) { }

  ngOnInit() {
    this.getRandomPlanet();
  }

  getRandomPlanet() {
    this.loading = true;
    this.planetRandomNumber = this.generateRandomNumber(1, 60);

    this.planetService.getPlanet(this.planetRandomNumber).subscribe(
      (planetObj: Planet) => {
        this.planets = planetObj;
        this.planetsQuantity = this.planets.films.length;
        if (this.planets.films.length !== 0) {
          // Encher variavel text films
          this.getFilms(this.planets.films);
        } else {
          this.films = [];
        }
        this.loading = false;
      }
    );
  }

  generateRandomNumber(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getFilms(filmUrls) {
    filmUrls.forEach(
      (filmList) => {
        this.films = [];
        this.filmService.getMoviesFromPlanet(filmList).subscribe(
          (filmObj: Film) => {
            this.films.push(filmObj.title);
            this.filmsText = this.films.join(', ');
          }
        );
      }
    );
    return this.films;
  }
}
