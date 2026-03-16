import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() { }
  private http = inject(HttpClient);

  getCountryInfo(countryCode: string): Observable<any> {
    return this.http.get<any>(`https://api.worldbank.org/v2/country/${countryCode}?format=json`);
  }
}
