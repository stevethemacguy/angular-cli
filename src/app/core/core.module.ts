import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'footer/footer.component';
import { HeaderComponent } from 'header/header.component';
import { CalendarComponent } from 'calendar/calendar.component';
import { SideBarComponent } from './src/app/core/side-bar/side-bar.component';
import { SideBarHeaderComponent } from './src/app/core/side-bar-header/side-bar-header.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  // "Singleton" components that are instantiated in the app once and may have a singleton service.
  declarations: [
    HeaderComponent,
    FooterComponent,
    CalendarComponent,
    SideBarComponent,
    SideBarHeaderComponent
  ]
})
export class CoreModule { }
