import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {City} from "../../entities/city";
import {CitiesService} from "../../../core/http/cities.service";


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})

export class SelectComponent implements OnInit{
  myControl:FormControl<string | null> = new FormControl('', Validators.required);
  options: City[];
  postalCodes: string[];
  filteredPostalCodes: string[];


  constructor(private citiesService:CitiesService) {
    this.options = [];
    this.filteredPostalCodes = [];
    this.postalCodes = [];
  }

  ngOnInit():void {
    console.log(this.myControl)
    this.citiesService.getCities().subscribe({
      next: res => {
        this.handlePostalCode(res);
      }
    });

    this.myControl.valueChanges.subscribe(
      value => {
        if (value && value.length>=2)
        {
          this.filteredPostalCodes = this._filter(value || '');
        }
        else
        {
          this.filteredPostalCodes = [];
        }
      }
    );
  }

  private _filter(value: string): string[]{
      const filterValue = value.toLowerCase();
      return this.postalCodes.filter(option => option.toLowerCase().startsWith(filterValue));
  }

  private handlePostalCode(cities : City[]):void{
    const distinctCodes : Set<string> = new Set<string>();
    for (let city of cities)
        distinctCodes.add(city.code_postal);

    this.postalCodes = Array.from(distinctCodes);
  }

  checkvalidity(){
    console.log(1);
    console.log(this.myControl.touched);
    return this.myControl.touched;
  }
}
