import { Component, Input, inject, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-country-info',
  standalone: true,
  imports: [],
  templateUrl: './country-info.component.html',
  styleUrl: './country-info.component.css'
})
export class CountryInfoComponent {
  name!: string;
  capital!: string;
  region!: string;
  incomeLevel!: string;
  longitude!: string;
  latitude!: string;
  private api = inject(ApiService);

  @Input() countryCode = "";

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["countryCode"]) {
      this.getCountryInfo();
    }
  }

  getCountryInfo(): void {
    this.api.getCountryInfo(this.countryCode).subscribe({
      next: (data: any) => {
        console.log(data);
        this.name = data[1][0].name;
        this.capital = data[1][0].capitalCity;
        this.region = data[1][0].region.value;
        this.incomeLevel = data[1][0].incomeLevel.value;
        this.longitude = data[1][0].longitude;
        this.latitude = data[1][0].latitude;
      },
      error: (err: any) => console.error(err)
    })
    // console.log(this.capital);
  }

  
  // async getCountry(event: MouseEvent) {
  //   let url = `https://api.worldbank.org/v2/country/${event}?format=json`;
  //   try {
  //     let countryCall = await fetch(url);

  //     if (!countryCall.ok) {
  //       throw new Error("Could not fetch country info")
  //     }

  //     let result = await countryCall.json();

  //     console.log(result);

  //     this.name = result[1][0].name;
  //     this.capital = result[1][0].capitalCity;
  //     this.region = result[1][0].region.value;
  //     this.incomeLevel = result[1][0].incomeLevel.value;
  //     this.longitude = result[1][0].longitude;
  //     this.latitude = result[1][0].latitude;

  //   } catch(err) {
  //     console.error(err);
  //   };
  // }

}
