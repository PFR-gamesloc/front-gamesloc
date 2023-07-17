import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [

  ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class CoreModule {
  // constructor(private core:CoreModule) {
  //     if(!core)
  //       throw new Error("coreModule has already been loaded. Import this module in the AppModule only.");
  // }
}
