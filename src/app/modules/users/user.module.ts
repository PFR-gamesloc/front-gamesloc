import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from "./user-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { DashboardPageComponent } from "./pages/dashboard-page/dashboard-page.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatDividerModule } from "@angular/material/divider";
import { AccordionItemComponent } from './components/accordion-item/accordion-item.component';
import { UserAccordionComponent } from './components/user-accordion/user-accordion.component';
import { UserAddressAccordionComponent } from './components/user-address-accordion/user-address-accordion.component';
import { OrdersAccordionComponent } from './components/orders-accordion/orders-accordion.component';


@NgModule({
  declarations: [
    DashboardPageComponent,
    AccordionItemComponent,
    UserAccordionComponent,
    UserAddressAccordionComponent,
    OrdersAccordionComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MatExpansionModule,
    MatListModule,
    MatDividerModule
  ]
})
export class UserModule { }
