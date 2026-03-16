import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorldMapComponent } from "./world-map/world-map.component";
import { CountryInfoComponent } from "./country-info/country-info.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WorldMapComponent, CountryInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'map-app';
}