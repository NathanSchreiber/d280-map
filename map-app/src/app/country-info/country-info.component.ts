import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-info',
  standalone: true,
  imports: [],
  templateUrl: './country-info.component.html',
  styleUrl: './country-info.component.css'
})
export class CountryInfoComponent implements OnInit {
  name!: string;
  capital!: string;
  region!: string;
  incomeLevel!: string;
  longitude!: string;
  latitude!: string;

  @Input() test = "";


  ngOnInit(): void {
    
  }
  
  async getCountry(event: MouseEvent) {
    let url = `https://api.worldbank.org/v2/country/${event}?format=json`;
    try {
      let countryCall = await fetch(url);

      if (!countryCall.ok) {
        throw new Error("Could not fetch country info")
      }

      let result = await countryCall.json();

      console.log(result);

      this.name = result[1][0].name;
      this.capital = result[1][0].capitalCity;
      this.region = result[1][0].region.value;
      this.incomeLevel = result[1][0].incomeLevel.value;
      this.longitude = result[1][0].longitude;
      this.latitude = result[1][0].latitude;

    } catch(err) {
      console.error(err);
    };
  }

}
