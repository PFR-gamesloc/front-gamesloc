import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { City } from "../../entities/city";
import { CitiesService } from "../../../core/http/cities.service";
import { Observable, debounceTime, distinctUntilChanged, filter, map, of, switchMap } from 'rxjs';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})

export class SelectComponent implements OnInit {

  options: City[];
  postalCodes: string[];
  cityNames: string[];
  filteredPostalCodes: string[];
  filteredCityNames: string[];

  formZipCode!: FormGroup;

  constructor(private citiesService: CitiesService, private rootFormGroup: FormGroupDirective) {
    this.options = [];
    this.filteredPostalCodes = [];
    this.filteredCityNames = [];
    this.postalCodes = [];
    this.cityNames = [];
  }

  @ViewChild('autoCityName') autoCityName: MatAutocomplete | undefined;

  ngOnInit(): void {
    this.citiesService.getCities().subscribe({
      next: res => {
        this.handlePostalCode(res);
        this.handleCityName(res);
      }
    });

    this.formZipCode = this.rootFormGroup.control;

    this.formZipCode.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(value => {
      if (value && value.cityName && value.postalCode.length >= 2) {
        this.filterCityNames();
      } else {
        this.filteredCityNames = [];
      }
    });
  }

  public _filter(value: string): string[] {
    const filterValueZip = value.toLowerCase();
    return this.postalCodes.filter(option => option.toLowerCase().startsWith(filterValueZip));
  }

  private _filterCityNamesByPostalCode(zipCode: string, cityNameFilter: string): string[] {
    const filterValueZip = zipCode.toLowerCase();
    const filteredCities = this.options.filter(city => city.postalCode.toLowerCase().startsWith(filterValueZip));
    return filteredCities.filter(city => city.cityName.toLowerCase().startsWith(cityNameFilter.toLowerCase()))
      .map(city => city.cityName);
  }

  private handlePostalCode(cities: City[]): void {
    const distinctCodes = new Set<string>(cities.map(city => city.postalCode));
    this.postalCodes = Array.from(distinctCodes);
  }

  private handleCityName(cities: City[]): void {
    const distinctNames: Set<string> = new Set<string>();
    for (let city of cities) {
      distinctNames.add(city.cityName);
    }
    this.cityNames = Array.from(distinctNames);
    this.options = cities;
  }

  public filterCityNames(): void {
    const zipCode = this.formZipCode.value ? this.formZipCode.value.postalCode : '';
    const cityNameFilter = this.formZipCode.value ? this.formZipCode.value.cityName : '';
    this.filteredCityNames = this._filterCityNamesByPostalCode(zipCode, cityNameFilter);
  }

  public onCitySelected(event: MatAutocompleteSelectedEvent): void {
    const selectedCity = event.option.value;
    const city = this.options.find(option => option.cityName === selectedCity);
    if (city) {
      if (this.autoCityName !== undefined) {
        this.formZipCode.get("postalCode")?.setValue(city.postalCode);
        this.autoCityName.closed;
      }
    }
  }
}