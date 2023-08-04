import { Component, Input } from '@angular/core';
import { TableData } from '../../entities/table-data';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.scss']
})
export class TableComponentComponent {

  @Input() tableData!: TableData[];
  @Input() displayedColumns!: string[]; 
  @Input() dataSource: any; 
}
