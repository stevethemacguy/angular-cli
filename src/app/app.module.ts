import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { VendorTestingComponent } from './vendor-testing/vendor-testing.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbDatepickerModule, NgbModalModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { NoDataModalComponent } from './no-data-modal/no-data-modal.component';
import { FedexBillingOverlayComponent } from './fedex-billing-overlay/fedex-billing-overlay.component';

@NgModule({
  // When you create new components, directives, and pipes in this module, put them in the declarations array.
  // Do not put any thing else in the declarations array (e.g. No NgModules, services, or model classes).
  declarations: [
    AppComponent,
    VendorTestingComponent,
    HomeComponent,
    NoDataModalComponent,
    FedexBillingOverlayComponent
  ],
  // Only NgModule classes go in the imports array. Do not put any other kind of class in imports.
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    //NgbAccordionModule, // To test bootstrap bundle size
    //NgbTooltipModule, // To test bootstrap bundle size
    NgbDatepickerModule,
    NgbModalModule,
    NgbPopoverModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  // The providers array is for services that are required by the entire application.
  // Consider putting the service in the shared or core modules first before putting it here.
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
