import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountRoutingComponent } from './account-routing.component';
import { LoginComponent } from './login/login.component';

// The order of the routes matters. The first-matched route wins, so place more specific routes above less specific routes.
const accountRoutes: Routes = [
  {
    // Creates the /account path in the URL
    path: '',
    component: AccountRoutingComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  // Only other NgModules go in the imports array. Do not put any other kind of class in imports.
  imports: [
    RouterModule.forChild(accountRoutes), // The account modules uses it's own router that appends urls to app-router
  ],
  exports: [
    RouterModule
  ]
})
export class AccountRoutingModule { }
