import { Component, ViewChild } from '@angular/core';
import { SideNavToggle } from '../../entities/SideNavToggle';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AdminOrder } from 'src/app/shared/entities/admin-order';
import { Observable, catchError, of } from 'rxjs';
import { OrdersService } from 'src/app/core/http/orders.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-located-games',
  templateUrl: './located-games.component.html',
  styleUrls: ['./located-games.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ], 
  providers: [DatePipe]
})
export class LocatedGamesComponent {
  orders$!: Observable<AdminOrder[]>;
  isSideNavCollapsed = false;
  screenWith = 0;
  displayedColumns: string[] = ['idCommande', 'client', 'locatedGame', 'price', 'orderDate', 'returnDate'];
  dataSource = new MatTableDataSource<AdminOrder>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private ordersService: OrdersService, 
    private datePipe: DatePipe) {
    this.getOrders();
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWith = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  private getOrders(): void {
    this.orders$ = this.ordersService.getAdminOrders().pipe(
      catchError((error) => {
        console.error('Error fetching orders:', error);
        return of([]); // En cas d'erreur, renvoyer un Observable vide pour éviter les erreurs de typage.
      })
    );

    this.orders$.subscribe((orders) => {
      this.dataSource.data = orders;
    });
  }
}
