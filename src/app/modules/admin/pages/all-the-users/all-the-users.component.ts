import { Component, ViewChild } from '@angular/core';
import { SideNavToggle } from '../../entities/SideNavToggle';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, catchError, of } from 'rxjs';
import { Customer } from 'src/app/shared/entities/customer';
import { CustomerService } from 'src/app/core/http/customer.service';
import {AdminCustomerService} from "../../../../core/http/admin-customer.service";

@Component({
  selector: 'app-all-the-users',
  templateUrl: './all-the-users.component.html',
  styleUrls: ['./all-the-users.component.scss']
})
export class AllTheUsersComponent {
  users$!: Observable<Customer[]>;
  isSideNavCollapsed = false;
  screenWith = 0;
  displayedColumns: string[] = ['idCustomer', 'lastName', 'firstName', 'email', 'phoneNumber'];
  dataSource = new MatTableDataSource<Customer>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private adminCustomerService: AdminCustomerService) {
    this.getUsers();
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWith = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  private getUsers(): void {
    this.users$ = this.adminCustomerService.getCustomersAdmin().pipe(
      catchError((error) => {
        console.error('Error fetching orders:', error);
        return of([]);
      })
    );

    this.users$.subscribe((users:Customer[]) => {
      this.dataSource.data = users;
    });
  }

}
