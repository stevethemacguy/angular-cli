import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorTestingComponent } from './vendor-testing/vendor-testing.component';
import { HomeComponent } from './home/home.component';

// Import Any components we need to navigate to
// import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  {path: 'vendor-testing', component: VendorTestingComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)], // Use {enableTracing: true} for debugging
  exports: [RouterModule]
})
export class AppRoutingModule {
}
