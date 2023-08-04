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
  myControlZipCode: FormControl<string | null> = new FormControl('', Validators.required);
  myControlName: FormControl<string | null> = new FormControl('', Validators.required);
  options: City[];
  postalCodes: string[];
  cityNames: string[];
  filteredPostalCodes: string[];
  filteredCityNames: string[];

  formZipCode! : FormGroup;

  constructor(private citiesService: CitiesService, private rootFormGroup : FormGroupDirective) {
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


    this.myControlZipCode.valueChanges.subscribe(
      value => {

        if (value && value.length >= 2) {
          this.filteredPostalCodes = this._filter(value || '');
        }
        else {
          this.filteredPostalCodes = [];
        }
      }
    );

    this.myControlName.valueChanges.subscribe(
      value => {
        if (value && value.length >= 2) {
          if (this.myControlZipCode.value != null)
            this.filteredCityNames = this._filterCityNamesByPostalCode(this.myControlZipCode.value, value);
        }
        else {
          this.filteredCityNames = [];
        }
      }
    )
  }

  private _filter(value: string): string[] {
    const filterValueZip = value.toLowerCase();
    return this.postalCodes.filter(option => option.toLowerCase().startsWith(filterValueZip));
  }

  private _filterCityNamesByPostalCode(zipCode: string, cityNameFilter: string): string[] {
    const filterValueZip = zipCode.toLowerCase();
    const filteredCities = this.options.filter(city => city.postalCode.toLowerCase().startsWith(filterValueZip));
    return filteredCities.map(city => city.cityName).filter(cityName => cityName.toLowerCase().startsWith(cityNameFilter.toLowerCase()));
  }

  private handlePostalCode(cities: City[]): void {
    const distinctCodes: Set<string> = new Set<string>();
    for (let city of cities)
      distinctCodes.add(city.postalCode);

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
    const zipCode = this.myControlZipCode.value;
    const cityNameFilter = this.myControlName.value || '';
    if (zipCode) {
      this.filteredCityNames = this._filterCityNamesByPostalCode(zipCode, cityNameFilter);
    }
  }

  public onCitySelected(event: MatAutocompleteSelectedEvent): void {
    const selectedCity = event.option.value;
    const city = this.options.find(option => option.cityName === selectedCity);
    if (city) {
      if(this.autoCityName !== undefined) {
        this.myControlZipCode.setValue(city.postalCode);
        this.autoCityName.closed;  
      }
    }
  }
}