import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { VendorTestingComponent } from './vendor-testing/vendor-testing.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  // When you create new components, directives, and pipes in this module, put them in the declarations array.
  // Do not put any thing else in the declarations array (e.g. No NgModules, services, or model classes).
  declarations: [
    AppComponent,
    VendorTestingComponent,
    HomeComponent
  ],
  // Only NgModule classes go in the imports array. Do not put any other kind of class in imports.
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  // The providers array is for services that are required by the entire application.
  // Consider putting the service in the shared or core modules first before putting it here.
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
