import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AddHeaderInterceptorService} from "./interceptor/add-header-interceptor.service";

@NgModule({
  declarations: [

  ],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptorService, multi: true },


  ]
})
export class CoreModule {
  // constructor(private core:CoreModule) {
  //     if(!core)
  //       throw new Error("coreModule has already been loaded. Import this module in the AppModule only.");
  // }
}
