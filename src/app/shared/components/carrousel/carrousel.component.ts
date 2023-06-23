import { Component, Input, OnInit } from '@angular/core';

interface carouselImage {
  imageSrc:string;
  imageAlt:string;
}
@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements  OnInit{
  

  @Input() images: carouselImage[] = [];
  @Input() indicators = true;

  selectedIndex: number = 0;
  
  
  ngOnInit(): void {
  }

  //L'index de l'image sur la dot
  selectedImage(index: number):void{
    this.selectedIndex = index;
  }
}
