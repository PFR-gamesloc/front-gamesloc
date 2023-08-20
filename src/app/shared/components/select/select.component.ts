import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormGroupDirective} from '@angular/forms';
import { City } from "../../entities/city";
import { debounceTime, distinctUntilChanged} from 'rxjs';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {CustomerService} from "../../../core/http/customer.service";


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

  constructor(private customerService: CustomerService, private rootFormGroup: FormGroupDirective) {
    this.options = [];
    this.filteredPostalCodes = [];
    this.filteredCityNames = [];
    this.postalCodes = [];
    this.cityNames = [];
  }

  @ViewChild('autoCityName') autoCityName: MatAutocomplete | undefined;

  ngOnInit(): void {
    this.formZipCode = this.rootFormGroup.control;

    this.formZipCode.get('postalCode')?.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe( {
      next: (value) => {
        console.log(value)
        if ( value.length >= 3) {
          this.customerService.getCities(value).subscribe({
            next: res => {
              this.handlePostalCode(res);
              this.handleCityName(res);
            }
          });
          this.filterCityNames();
        } else {
          this.filteredCityNames = [];
        }
      }});
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

  get postalErrors(){
    return this.formZipCode.get('postalCode')?.errors;
  }

  get cityErrors(){
    return this.formZipCode.get('cityName')?.errors;
  }
  checkPostalValidity(){
    return (this.formZipCode.get('postalCode')?.invalid && (this.formZipCode.get('postalCode')?.touched || this.formZipCode.get('postalCode')?.dirty));
  }
  checkCityValidity(){
    return (this.formZipCode.get('cityName')?.invalid && (this.formZipCode.get('cityName')?.touched || this.formZipCode.get('cityName')?.dirty));
  }
}
