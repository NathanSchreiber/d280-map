import { Component } from '@angular/core';
import { WorldMapComponent } from '../world-map/world-map.component';
import { CountryInfoComponent } from '../country-info/country-info.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [WorldMapComponent, CountryInfoComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  selectedCountry = '';

  dataHandler(countryCode: string) {
    this.selectedCountry = countryCode;
  }
}
