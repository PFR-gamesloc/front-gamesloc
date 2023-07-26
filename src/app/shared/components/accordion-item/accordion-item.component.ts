import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent {
  panelOpenState = false; 

  @Input() panelTitle: string | undefined;  
  @Input() itemList: any[] = [];
}
