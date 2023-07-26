import { Component, Input } from '@angular/core';

interface AccordionItem {
  title: string,
  describe: string 
}

@Component({
  selector: 'app-accordion-list-item',
  templateUrl: './accordion-list-item.component.html',
  styleUrls: ['./accordion-list-item.component.scss']
})
export class AccordionListItemComponent {
  @Input() itemList: AccordionItem[] = []; 
  @Input() titleListItem: string | undefined; 
  @Input() contentListItem: string | undefined; 
}
