import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Country } from 'src/app/interface/country';
import { CountryData } from 'src/app/interface/country-data';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {

  buttonText: string = "Buscar Países"
  countries: Country[];
  selectedCountryData: CountryData[];
  currentCountrySlug: string;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
  }

  fetchCountries = () => {
    this.apiService.fetchCountriesService().subscribe({
        next: response => this.countries = response,
      })
  }

  onSelectChange = (event: MatSelectChange) => {
    const { value: slug } = event;
    this.currentCountrySlug = slug;
    this.apiService
      .fetchCountryDataService(slug)
      .subscribe({
        next: countryData => this.selectedCountryData = countryData,
      })
  }
}
