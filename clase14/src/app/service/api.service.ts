import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Country } from '../interface/country';
import { environment } from '../../environments/environment'
import { CountryData } from '../interface/country-data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}
  // Esto es igual a lo que está definido arriba
  // private http;
  // constructor(private http: HttpClient) {
  //   this.http = http;
  // }

  fetchCountriesService = (): Observable<Country[]> =>
    this.http.get<Country[]>(`${environment.baseUrl}/countries`)
    .pipe(
      map( countries => countries.sort((a,b) => a.Country.localeCompare(b.Country)))
    )

  fetchCountryDataService = (slug: string): Observable<CountryData[]> =>
    this.http.get<CountryData[]>(`${environment.baseUrl}/country/${slug}`)
}
