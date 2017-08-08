import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorTestingComponent } from './vendor-testing/vendor-testing.component';

// Import Any components we need to navigate to
// import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  {path: 'vendor-testing', component: VendorTestingComponent},
  {path: '', redirectTo: '/vendor-testing', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)], // Use {enableTracing: true} for debugging
  exports: [RouterModule]
})
export class AppRoutingModule {
}
