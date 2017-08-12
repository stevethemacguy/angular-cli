import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'footer/footer.component';
import { HeaderComponent } from 'header/header.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  // "Singleton" components that are instantiated in the app once and may have a singleton service.
  declarations: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
