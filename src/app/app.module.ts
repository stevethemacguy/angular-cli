import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VendorTestingComponent } from './vendor-testing/vendor-testing.component';

@NgModule({
  declarations: [
    AppComponent,
    VendorTestingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
