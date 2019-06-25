import { Component, OnInit } from '@angular/core';
import { PlanetService } from './_services/planet.service';
import { Planet } from './_model/planet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public planets: Planet[];

  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    this.planetService.getAll().subscribe(
      (data: Planet[]) => {
        this.planets = data;
        console.log(this.planets);
      }
    );
  }
}
