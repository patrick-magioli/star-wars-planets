import { Component, OnInit } from '@angular/core';
import { PlanetService } from './_services/planet.service';
import { Planet } from './_model/planet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public planets: Planet;
  public planetNumber: number;

  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    this.getRandomPlanet(1, 60);
  }

  getRandomPlanet(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    this.planetNumber = Math.floor(Math.random() * (max - min)) + min;

    this.planetService.getAll(this.planetNumber).subscribe(
      (data: Planet) => this.planets = data
    );
    console.log(this.planetNumber);
  }
}
